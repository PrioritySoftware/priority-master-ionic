import { Component, ViewChild } from "@angular/core";
import { FormService, MessageHandler, ObjToIterable, FileUploader, Form ,ItemOptions} from 'priority-ionic';
import { NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../Details/details.page';
import { FormConfig } from "../../entities/form.class";
import { AppService } from "../../services/app.service";
import { Strings } from '../../app/app.config';
import { ElementRef, Renderer } from '@angular/core';

const RowsBatchSize = 115;

@Component({
    selector: "list-page",
    templateUrl: "list.view.html"
})

export class ListPage
{
    form: Form;
    parentForm: Form;
    formConfig: FormConfig;
    iterablePipe: ObjToIterable;
    isSubform: boolean;
    dirByLang: string;
    lastSearch: string;
    listeners: any[];
    searchPlaceholder: string;
    isSearching: boolean;
    scrollLoadingText: string;
    infiniteScrollEnabled: boolean;
    itemOptions:ItemOptions={};

    @ViewChild(FileUploader) fileUploader: FileUploader;

    constructor(private appService: AppService,
        private formService: FormService,
        private messageHandler: MessageHandler,
        private nav: NavController,
        private navParams: NavParams,
        private elementRef: ElementRef,
        private renderer: Renderer,
        private strings:Strings)
    {
        this.form = this.navParams.data.form;
        this.parentForm = this.navParams.data.parentForm;
        this.formConfig = this.appService.getFormConfig(this.form, this.parentForm);
        this.isSubform = this.navParams.data.isSubform;
        this.isSearching = false;
        this.iterablePipe = new ObjToIterable();
        this.dirByLang = this.strings.dirByLang;
        this.searchPlaceholder = this.strings.search;
        this.scrollLoadingText = this.strings.scrollLoadingText;
        this.infiniteScrollEnabled = Object.keys(this.form.rows).length == RowsBatchSize;
        this.listeners = new Array();

        let buttonsSideByLang = this.dirByLang == 'rtl' ? 'left' : 'right';

        let editButton = {
            text: this.strings.editBtnText,
            icon: 'create',
            color: 'favorite',
            side: buttonsSideByLang,
            click: this.editRow
        }
        let openButton = {
            text: this.strings.openBtnText,
            icon: 'open',
            side: buttonsSideByLang,
            color: 'favorite',
            click: this.openAttachRow
        }
        let deleteButton = {
            text: this.strings.deleteBtnText,
            icon: 'trash',
            side: buttonsSideByLang,
            color: 'danger',
            click: this.deleteRow
        }

        if (this.form.name == "EXTFILES")
        {
            this.itemOptions.slidingButtons = [deleteButton, openButton];
            this.itemOptions.click = this.openAttachRow
        }
        else
        {
            this.itemOptions.slidingButtons = [deleteButton, editButton];
            this.itemOptions.click = this.editRow
        }
    }

    ionViewDidLoad()
    {
        //listen to ENTER key to fire the search
        let searchInput = this.elementRef.nativeElement.querySelector('.searchbar-input');
        if (searchInput != null)
        {
            this.listeners[0] = this.renderer.listen(searchInput, 'keyup', (event) =>
            {
                if (event.keyCode == 13)
                {
                    this.search(searchInput.value);
                }
            });
        }
        //listen to click on search icon to fire the search
        let searchIcon = this.elementRef.nativeElement.querySelector('.searchbar-search-icon');
        if (searchIcon != null)
        {
            this.listeners[1] = this.renderer.listen(searchIcon, 'click', (event) =>
            {
                this.search(searchInput.value);
            });
        }
    }

    ionViewWillLeave()
    {
        this.listeners.map((removeListnerFunc) => removeListnerFunc());
    }

    getRows()
    {
        return this.iterablePipe.transform(this.form.rows);
    }

    editRow = (item) => 
    {
        this.formService.setActiveRow(this.form, item.key).then(
            result =>
            {
                this.nav.push(DetailsPage, { form: this.form, rowInd: item.key, parentForm: this.parentForm });
            }, reason => { });
    }

    deleteRow = (item) =>
    {
        let delFunc = () =>
        {
            this.messageHandler.showTransLoading();
            this.formService.deleteListRow(this.form, item.key)
                .then(() => this.messageHandler.hideLoading())
                .catch(() => this.messageHandler.hideLoading());
        }
        this.messageHandler.showErrorOrWarning(false, this.strings.isDelete, delFunc);
    }

    //search function sets a filter on form rows
    search(val)
    {
        if (this.lastSearch != val)
        {
            this.lastSearch = val;
            this.isSearching = true;
            //init the enable scroll when searching
            this.infiniteScrollEnabled = true;
            this.formService.setFilter(this.form, this.formConfig.searchColumns, val).then(
                result =>
                {
                    this.isSearching = false;
                }, reason =>
                {
                    if (this.formConfig.searchColumns.length == 0)
                    {
                        this.messageHandler.showErrorOrWarning(true, this.strings.searchError, () => { }, () => { }, { title: this.strings.errorTitle });
                    }
                    this.isSearching = false;
                });
        }
    }
    //binded to the input event of ionic search bar - fired after debounce of 1500 sec
    searchInput(ev)
    {
        var val = ev.target.value;
        if (val !== undefined)
        {
            this.search(val);
        }
    }
    //binded to the cleared event of ionic search bar

    searchCleared(ev)
    {
        this.search("");
    }

    isAttachments()
    {
        return this.form.name == "EXTFILES"
    }


    //The form could be a subform
    //So we check if it is an 'attachments' subform
    //The icon in + button will be 'attach'
    getAddNewIcon()
    {
        if (this.isAttachments())
            return "attach";
        return "add";
    }

    //The form could be a subform
    //So we check if it is an 'attachments' subform
    //We open an upload dialog and then add it
    addNewFunc()
    {
        if (this.isAttachments())
        {
            this.newRowUpload();
        }
        else
        {
            this.addNewFormItem();
        }
    }

    addNewFormItem = () =>
    {
        this.formService.newRow(this.form).then(
            newRowInd =>
            {
                this.nav.push(DetailsPage, { form: this.form, rowInd: newRowInd, parentForm: this.parentForm });
            }, reason => { });
    }

    /** upload a file in an EXTFILES subform */
    newRowUpload = () =>
    {
        this.fileUploader.uploadFile().then(
            result =>
            {
                this.formService.newRow(this.form).then(
                    rowInd =>
                    {
                        this.formService.updateField(this.form, result.file, "EXTFILENAME").then(
                            () =>
                            {
                                this.formService.saveRow(this.form, rowInd, 0);
                            });
                    });
            })
            .catch(reason => { });
    }

    openAttachRow = (item) =>
    {
        let url: string = item["EXTFILENAME"];
        window.open(encodeURI(this.formService.getFileUrl(this.form, url)), "_system");
    }


    /** scrolling **/
    doInfinite(infiniteScroll)
    {
        let recordsCount = Object.keys(this.form.rows).length;
        this.formService.getRows(this.form, recordsCount + 1).then(
            rows =>
            {
                //enable infinite scroll when there are no more rows
                if (Object.keys(rows).length != RowsBatchSize)
                {
                    this.infiniteScrollEnabled = false;
                }
                infiniteScroll.complete();
            }, reason =>
            {
                infiniteScroll.complete();
            });
    }

    leavePage = () =>
    {
        // if(this.isSubform)
        // {
        this.formService.endForm(this.form).then(
            () =>
            {
                this.nav.pop();
            }, () => { })
        // }
        // else 
        // {
        //     //we should end form here and delete it from list
        //     this.nav.pop();
        // }
    }
}