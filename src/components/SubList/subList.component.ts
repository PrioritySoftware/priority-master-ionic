import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormService, MessageHandler, ServerResponseType, FileUploader } from 'priority-ionic';
import { Strings } from '../../app/app.config';
import { ObjToIterable } from "priority-ionic";
import { TextPage } from "../../pages/Text/text.page";
import { DetailsPage } from '../../pages/Details/details.page';
import { CustomForm } from "../../entities/form.class";

@Component({
    selector: 'sub-list',
    templateUrl: 'subList.view.html'
})

export class SubList implements AfterViewChecked
{

    iterablePipe: ObjToIterable;
    editButton;
    openButton;
    deleteButton;
    itemOptions = {} as any;
    showAllItemsText = Strings.showAllItems;

    isShowMoreText;

    subform;
    @Input() set Subform(subform)
    {
        this.subform = subform;
        if (this.isAttachments())
        {
            this.itemOptions.slidingButtons = [this.deleteButton, this.openButton];
        }
        else
        {
            this.itemOptions.slidingButtons = [this.deleteButton, this.editButton];
        }
        this.itemOptions.itemSelect = this.getSelectSubformRowFunc();
    }

    @Output() expandList = new EventEmitter<Function>();

    @Output() goToSubform = new EventEmitter<Function>();

    @ViewChild(FileUploader) fileUploader: FileUploader;
    @ViewChild('textElement') textElement: ElementRef;


    constructor(private nav: NavController, private formService: FormService, private messageHandler: MessageHandler, private cdRef: ChangeDetectorRef)
    {
        this.iterablePipe = new ObjToIterable();
        this.editButton = {
            text: Strings.editBtnText,
            icon: 'create',
            color: 'favorite',
            side: 'left',
            click: this.editSubFormRow
        }
        this.openButton = {
            text: Strings.openBtnText,
            icon: 'open',
            side: 'left',
            color: 'favorite',
            click: this.openAttachRow
        }
        this.deleteButton = {
            text: Strings.deleteBtnText,
            icon: 'trash',
            side: 'left',
            color: 'danger',
            click: this.deleteSubformRow
        }
    }

    //We need to implement this function, because the rows of the form are loaded asynchronously,
    //the isShowMoreText changes to 'true' after Angular's changeDetector has finished running
    //So here we explicitly tell Angular's changeDetector to run again
    //see this question: http://stackoverflow.com/questions/43513421/ngif-expression-has-changed-after-it-was-checked
    ngAfterViewChecked()
    {
        let show = this.showMoreText();
        if (show != this.isShowMoreText)
        { // check if it change, tell CD to update view
            this.isShowMoreText = show;
            this.cdRef.detectChanges();
        }
    }

    //return if to show the '...' in textforms
    showMoreText()
    {
        return this.textElement && this.textElement.nativeElement.scrollHeight > this.textElement.nativeElement.clientHeight
    }

    //return if subform is attachments form
    isAttachments()
    {
        return this.subform.name == "EXTFILES"
    }

    //return if subform is type of text
    isText(subform = null)
    {
        if (subform != null)
        {
            return subform.ishtml == 1;
        }
        return this.subform.ishtml == 1;
    }

    getText()
    {
        if (this.subform.rows["1"] != null)
            return this.subform.rows["1"].htmltext;
        return "";
    }

    getRows()
    {
        let items = this.iterablePipe.transform(this.subform.rows);
        return items.slice(0, 5);
    }

    getAddNewOrEditIcon()
    {
        if (this.subform.oneline == 1 || (this.isText() && this.getText() != ""))
            return "md-create";
        if (this.isAttachments())
            return "attach";
        return "add";
    }

    showSeparator()
    {
        if (this.isText())
        {
            return this.getText() == '';
        }
        else
        {
            return Object.keys(this.subform.rows).length == 0;
        }
    }

    canExpand()
    {
        return Object.keys(this.subform.rows).length > 5;
    }

    viewExpandList()
    {
        this.expandList.emit(this.subform);
    }

    editSubFormRow = (item) =>
    {
        let editFunc = () =>
        {
            this.formService.editSubFormRow(this.subform.parentForm, this.subform.name, item.key).then(
                result =>
                {
                    this.nav.push(DetailsPage, { form: this.subform, rowInd: item.key, isSubform: true });
                });
        };
        this.goToSubform.emit(editFunc);
    }

    deleteSubformRow = (item) =>
    {
        this.goToSubform.emit(() =>
        {
            let delFunc = () =>
            {
                this.messageHandler.showTransLoading();
                this.formService.deleteSubFormListRow(this.subform.parentForm, this.subform.name, item.key)
                    .then(() => this.messageHandler.hideLoading())
                    .catch(() => this.messageHandler.hideLoading());
            }
            this.messageHandler.showErrorOrWarning(false, Strings.isDelete, delFunc);
        });
    }

    getSelectSubformRowFunc()
    {
        if (this.isAttachments())
            return this.openAttachRow;
        return this.editSubFormRow;
    }

    addNewOrEditSubformFunc()
    {
        let subformFunc;
        if (this.isAttachments())
        {
            subformFunc = this.newRowUpload;
        }
        else
        {
            subformFunc = () =>
            {
                this.formService.startSubform(this.subform.parentForm, this.subform.name).then(subform =>
                {
                    if (this.isText(subform))
                        this.editTextForm();
                    else
                        this.addNewFunc();
                }).catch(reason => { });
            }
        };
        this.goToSubform.emit(subformFunc);
    }

    addNewFunc = () =>
    {
        this.formService.newRow(this.subform).then(
            rowInd =>
            {
                this.nav.push(DetailsPage, { form: this.subform, rowInd: rowInd, isSubform: true });
            });
    }

    //*********************************** Text ********************************************

    editTextForm = () =>
    {
        this.formService.getRows(this.subform, 1).then(
            result =>
            {
                //temporary  TODO this should push a new DetailedPage that can display text;
                this.nav.push(TextPage, { form: this.subform });
            }, reason => { });
    }

    //********************************* Atachments ****************************************

    /** upload a file in an EXTFILES subform */
    newRowUpload = () =>
    {
        this.fileUploader.uploadFile().then(
            result =>
            {
                this.formService.addNewSubFormRow(this.subform, "EXTFILES").then(
                    rowInd =>
                    {
                        this.formService.updateField(this.subform, result.file, "EXTFILENAME").then(
                            () =>
                            {
                                this.formService.saveRow(this.subform, rowInd, 0).then(
                                    () =>
                                    {
                                        this.formService.endForm(this.subform);
                                    });
                            });
                    });
            })
            .catch(reason =>{});
    }

    openAttachRow = (item) =>
    {
        let url: string = item["EXTFILENAME"];
        window.open(encodeURI(this.formService.getFileUrl(this.subform, url)), "_system");
    }

}
