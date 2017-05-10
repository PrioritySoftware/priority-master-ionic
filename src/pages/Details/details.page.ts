import { NavController, PopoverController, NavParams } from 'ionic-angular';
import { Component, ViewChild, HostListener } from '@angular/core';
import { ListPage } from '../List/list.page';
import { SearchPage } from '../Search/search.page';
import { Strings } from '../../app/app.config';
import { FormService, MessageHandler, } from 'priority-ionic';
import { Search, Form, Column, ColumnOptions } from 'priority-ionic';
import { BarcodeScanner } from 'ionic-native';
import { FormConfig } from "../../entities/form.class";
import { AppService } from "../../services/app.service";
declare var window;


@Component({
    selector: 'page-details',
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

    isLeaveWithoutCheckchanges: boolean;
    isLeave = true;

    dirByLang: string;
    dirOpposite: string;
    editBtnText: string;
    deleteBtnText: string;
    cancelBtnText: string;
    saveBtnText: string;
    doneText: string;

    constructor(private appService: AppService,
                private formService: FormService,
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

    sortSubforms = (subform1: FormConfig, subform2 : FormConfig) =>
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

    columnClicked(column: Column)
    {
        if(column.zoom == "Search" || column.zoom == "Choose")
        {
            this.openSearchList(column);
        }
    }

    /**Navigates to 'Search' page and shows search results there. */
    openSearchList(column: Column)
    {
        let value = this.selectedItem[column.key] ? this.selectedItem[column.key] : '';
        this.formService.openSearchOrChoose(this.form, column.key, value).then(
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
                            value: value,
                            form: this.form
                        }
                    );
                }

            },
            reason => {});
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
}