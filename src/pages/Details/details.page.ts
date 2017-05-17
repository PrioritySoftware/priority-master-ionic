import { NavController, PopoverController, NavParams } from 'ionic-angular';
import { Component, ViewChild, HostListener } from '@angular/core';
import { ListPage } from '../List/list.page';
import { SearchPage } from '../Search/search.page';
import { Strings } from '../../app/app.config';
import { FormService, PermissionsService, MessageHandler } from 'priority-ionic';
import { FileUploader, MenuPopup, ButtonOptions, Form, Search, Column, ColumnOptions } from 'priority-ionic';
import { BarcodeScanner } from 'ionic-native';
import { FormConfig } from "../../entities/form.class";
import { AppService } from "../../services/app.service";
declare var window;


@Component({
    templateUrl: 'details.view.html'
})

export class DetailsPage
{
    selectedItem;
    form: Form;
    parentForm: Form;
    formConfig: FormConfig;
    subforms;
    rowInd;
    title: string;
    isSubform: boolean;
    isShowWaitingDots: boolean;
    validationMessages = {};

    isLeaveWithoutCheckchanges: boolean;
    isLeave = true;

    dirByLang: string;
    dirOpposite: string;
    editBtnText: string;
    deleteBtnText: string;
    cancelBtnText: string;
    saveBtnText: string;
    doneText: string;

    @ViewChild(FileUploader) fileUploader: FileUploader;
    @HostListener('updatefield', ['$event']) updateField(event)
    {
        event = event.detail;
        this.updateFields(event.field, event.value, event.prevVal);
    }

    constructor(private appService: AppService,
        private formService: FormService,
        private permissions: PermissionsService,
        private nav: NavController,
        private navParams: NavParams,
        private popoverCtrl: PopoverController,
        private messageHandler: MessageHandler)
    {
        //data
        this.form = this.navParams.data.form;
        this.parentForm = this.navParams.data.parentForm;
        this.formConfig = this.appService.getFormConfig(this.form, this.parentForm);
        this.rowInd = this.navParams.data.rowInd;
        this.isSubform = this.navParams.data.isSubform;
        this.selectedItem = this.formService.getFormRow(this.form, this.rowInd);
        this.setIsChangesSaved(true);
        this.subforms = [];
        this.getSubForms();

        //strings
        this.dirOpposite = Strings.dirOpposite;
        this.dirByLang = Strings.dirByLang;
        this.editBtnText = Strings.editBtnText;
        this.deleteBtnText = Strings.deleteBtnText;
        this.cancelBtnText = Strings.cancel;
        this.saveBtnText = Strings.saveBtnText;
        this.doneText = Strings.ok;

        this.isShowWaitingDots = false;
    }

    // ****************** Subforms ***************************

    /** Get subform rows for current item */
    getSubForms()
    {
        for (var ind in this.formConfig.subforms)
        {
            let subformName = this.formConfig.subforms[ind];
            let subform = this.formService.getForm(subformName,this.form);
            subform.name = subformName;
            this.subforms.push(subform);
        }
        this.messageHandler.showTransLoading();
        this.formService.getSubForms(this.form, this.formConfig.subforms, this.rowInd).then(
            () =>
            {
                this.messageHandler.hideLoading();
            },
            reason => { this.messageHandler.hideLoading(); });
    }

    clearSubforms = () =>
    {
        this.formService.clearSubforms(this.subforms);
    }

    goToSubform(subformFunc)
    {
        if (!this.getIsChangesSaved())
            this.messageHandler.showChangesNotSaved(
                () =>
                {
                    this.saveRow(subformFunc);
                },
                () =>
                {
                    this.undoRow(true, subformFunc);
                }
            );
        else if (this.selectedItem.isNewRow)
        {
            this.messageHandler.showToast(Strings.cannotGoToSubForm, 3000);
        }
        else
        {
            subformFunc();
        }
    }

    expandSubformList(subform)
    {
        this.formService.startSubform(this.form, subform.name).then(
            () =>
            {
                this.nav.push(ListPage, { form: subform, isSubform: true, parentForm: this.form });
            },
            () => { });
    }

    // Page leaving functions 
    leavePage = () =>
    {
        if (this.isLeave)//Maybe backbutton was pressed for other functionality, then we shouldn't leave the page (isLeave = false)
        {
            if (!this.getIsChangesSaved())
            {
                this.messageHandler.showChangesNotSaved(
                    this.saveRow,
                    () =>
                    {
                        this.undoRow(true, this.leavePage);
                    });
            }
            else
            {
                //Clear subform rows - that refer to the current item.
                this.clearSubforms();
                //If current item is a new row item that wasn't saved we should delete it.
                if (this.selectedItem.isNewRow)
                {
                    this.formService.deleteLastFormRow(this.form);
                }
                //If current item is a subform item we should first end the subfrom. 
                if (this.isSubform)
                {
                    this.formService.endForm(this.form).then(
                        () =>
                        {
                            this.nav.pop();
                        }, () => { });
                }
                else 
                {
                    this.nav.pop();
                }

            }
        }
        else
        {
            this.isLeave = true;//reset the isLeave to true for the next time
        }
    }
    setIsChangesSaved(isSaved: boolean)
    {
        this.formService.setIsRowChangesSaved(this.form, this.rowInd, isSaved);
    }
    getIsChangesSaved()
    {
        return this.formService.getIsRowChangesSaved(this.form, this.rowInd);
    }
    displayValidationMessage(message,column)
    {
        this.validationMessages[column.key] = message;
    }
    sortColumns = (column1, column2) =>
    {
        let columnOptions1 = this.getColumnOptions(column1);
        let columnOptions2 = this.getColumnOptions(column2);
        if (columnOptions1.pos > columnOptions2.pos)
        {
            return 1;
        }
        if (columnOptions2.pos > columnOptions1.pos)
        {
            return -1;
        }
        return 0;
    }
    sortSubforms = (subform1, subform2) =>
    {
        if (subform1.pos > subform2.pos)
        {
            return 1;
        }
        if (subform2.pos > subform1.pos)
        {
            return -1;
        }
        return 0;
    }
    /** Column display properties */
    isShowColumn = (column: Column) =>
    {
        let columnOptions = this.getColumnOptions(column);
        return columnOptions && columnOptions.isShow;
    }
    isDateOrTimeColumn(column: Column)
    {
        return column.type == "date" || (column.type == "time" && column.maxLength == 5);
    }
    isBoolColumn(column: Column)
    {
        return column.type == "bool";
    }
    columnDirection(column: Column)
    {
        if (column.type == "number" || column.type == "time")
        {
            return "ltr"
        }
        return this.dirByLang;
    }
    updateFields(columnName, value, prevVal, isUpdateAfterError = true)
    {
        if (columnName == null)
            return;
        let blockTimeout = setTimeout(() =>
        {
            this.messageHandler.showTransLoading();
        }, 500);
        this.formService.updateField(this.form, value, columnName).then(
            result =>
            {
                clearTimeout(blockTimeout);
                this.messageHandler.hideLoading();
            },
            error =>
            {
                clearTimeout(blockTimeout);
                this.messageHandler.hideLoading();
                this.selectedItem[columnName] = prevVal;
                if (isUpdateAfterError)
                {
                    this.updateFields(columnName, prevVal, prevVal, false);
                }
            }
        );
    }
    getType(column: Column)
    {
        if (column.type == "number")
            return "text";
        return column.type;
    }
    isReadOnly(column: Column)
    {
        return column.readonly == 1;
    }
    isShowFieldName(column: Column)
    {
        return true;
    }
    /** Column value */
    getValue(column: Column)
    {
        if (this.selectedItem[column.key] == null)
            return "";
        return this.selectedItem[column.key];
    }
    /** Search/Choose functionality */
    isSearch(column: Column)
    {
        return (column.zoom == "Search" || column.zoom == "Choose") && !this.isBoolColumn(column) && !this.isReadOnly(column);
    }
    isBarcode(column: Column)
    {
        let columnOptions = this.getColumnOptions(column);
        return (window.cordova) && columnOptions && columnOptions.subtype == "barcode";
    }
    isAttach(column: Column)
    {
        return column.zoom == "Attach";
    }
    isShowColumnIcon(column: Column)
    {
        return this.isSearch(column) || this.isBarcode(column) || this.isAttach(column);
    }
    getColumnIconName(column: Column)
    {
        if (this.isBarcode(column))
            return "barcode";
        if (this.isSearch(column))
            return "ios-arrow-down";
        if (this.isAttach(column))
            return "attach";
    }
    /**
     * Returns the column's options object as it is defined in app.service.
     * Used for display properties.
     * @param {any} column 
     * @returns 
     * @memberOf DetailsPage
     */
    getColumnOptions(column):ColumnOptions
    {
        return this.formConfig.detailsColumnsOptions[column.key];
    }
    columnIconClicked($event, column: Column)
    {
        if (this.isBarcode(column))
        {
            this.barcodeScan(column);
        }
        else if (this.isSearch(column))
        {
            this.openSearchList(column);
        }
        else if (this.isAttach(column))
        {
            this.attachClicked($event, column);
        }
    }
    /* Use phonegap-plugin-barcodescanner to scan barcode into current field */
    barcodeScan(column: Column)
    {
        if (!window.cordova)
            return;
        this.permissions.requestPermission("camera").then(
            () =>
            {
                //Note: I think that in lasndscape mode scans code-39 barcodes better because rectangle is bigger, so I forced landscape (only works on android).
                BarcodeScanner.scan(
                    {
                        showFlipCameraButton: true,
                        showTorchButton: true,
                        resultDisplayDuration: 0,
                        orientation: "landscape",
                    }).then(
                    result =>
                    {
                        if (result == null || result.text == null || result.cancelled)//If returned from scan without scanning
                        {
                            this.isLeave = false;//Means that the backbutton was clicked - Don't leave page - Check behavior in iOS!!!!!!!
                            if (this.isSearch(column))//If the column is search open the search page
                            {
                                this.openSearchList(column);
                            }
                            return;
                        }
                        let restext = result.text;
                        if (column.maxLength > 0 && restext.length > column.maxLength)
                        {    //should be handled in field validator not here
                            this.displayValidationMessage(Strings.maxLengthForField + column.maxLength, column);
                            setTimeout(() => {this.displayValidationMessage('',column)},2000);
                        }
                        else if (this.selectedItem[column.key] != restext)
                        {
                            this.updateFields(column.key, restext, this.selectedItem[column.key]);
                        }
                    }).catch(
                    reason =>
                    {
                        this.messageHandler.showToast("Scanning failed: " + reason);
                    }
                    );
            },
            error =>
            {
                this.messageHandler.showToast(Strings.scanError);
            });
    }
    /**Navigates to 'Search' page and shows search results there. */
    openSearchList(column: Column)
    {
        this.formService.openSearchOrChoose(this.form, column.key, this.getValue(column)).then(
            (res: Search) =>
            {
                this.isLeaveWithoutCheckchanges = true;
                let searchResults = res.SearchLine == null ? res.ChooseLine : res.SearchLine;
                if (searchResults != null && searchResults.length > 0)
                {
                    this.nav.push(
                        SearchPage,
                        {
                            searchObj: res,
                            column: column,
                            value: this.getValue(column),
                            form: this.form
                        }
                    );
                }

            }, reason => { });
    }
    chooseInputClick(column: Column)
    {
        if (this.isSearch(column))
            this.openSearchList(column);
    }
    /**Saves current row */
    saveRow = (afterSaveFunc = null) =>
    {
        this.isShowWaitingDots = true;
        this.formService.saveRow(this.form, this.rowInd, 0).then(
            () =>
            {
                this.isShowWaitingDots = false;
                if (afterSaveFunc != null)
                {
                    afterSaveFunc();
                }
                else
                {
                    this.leavePage();
                }

            },
            () =>
            {
                this.isShowWaitingDots = false;
            });
    }
    /** Undoes changes in current row */
    undoRow = (isAfterCheckChanges = false, afterUndoFunc = null) =>
    {
        this.isShowWaitingDots = true;
        this.formService.undoRow(this.form).then(
            result =>
            {
                this.isShowWaitingDots = false;
                this.setIsChangesSaved(true);
                if (afterUndoFunc != null)
                {
                    afterUndoFunc();
                }
                else
                {
                    if (isAfterCheckChanges || this.selectedItem.isNewRow)
                    {
                        this.leavePage();
                    }
                }
            },
            () =>
            {
                this.isShowWaitingDots = false;
            });
    }
    /** Deletes current row */
    deleteRow()
    {

        let delFunc = () =>
        {
            this.isShowWaitingDots = true;
            this.formService.deleteRow(this.form).then(
                res =>
                {
                    this.isShowWaitingDots = false;
                    this.leavePage();
                },
                () =>
                {
                    this.isShowWaitingDots = false;
                });
        };
        this.messageHandler.showErrorOrWarning(false, Strings.isDelete, delFunc);
    }

    //******************************* Attachments *****************************************

    attachClicked(event, column)
    {
        if (this.getValue(column) != "")
        {
            let popover;
            let openAttach: ButtonOptions = {
                text: Strings.openBtnText,
                click: () =>
                {
                    popover.dismiss();
                    this.openAttach(this.getValue(column));
                }
            }
            let changeAttach: ButtonOptions = {
                text: Strings.changeBtnText,
                click: () =>
                {
                    popover.dismiss();
                    this.fileUpload(column);
                }
            }
            popover = this.popoverCtrl.create(MenuPopup, {
                items: [openAttach, changeAttach],
            });
            popover.present({ ev: event });
        }
        else
        {
            this.fileUpload(column);
        }
    }

    /** upload a file in a field */
    fileUpload(column)
    {
        this.fileUploader.uploadFile().then(
            result =>
            {
                //should be done in main update field
                this.formService.updateField(this.form, result.file, column.key);
            }, reason => { });
    }

    openAttach(url)
    {
        window.open(encodeURI(this.formService.getFileUrl(this.form, url)), "_blank");
    }

}