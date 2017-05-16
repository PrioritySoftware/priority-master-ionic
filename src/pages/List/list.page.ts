import { Component, ViewChild } from "@angular/core";
import { FormService, MessageHandler, ObjToIterable, FileUploader } from 'priority-ionic';
import { NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../Details/details.page';
import { CustomForm } from "../../entities/form.class"
import { Strings } from '../../app/app.config';
import { ElementRef, Renderer } from '@angular/core';

const RowsBatchSize = 115;

@Component({
    selector: "page-list",
    templateUrl: "list.view.html"
})

export class ListPage
{
    form: CustomForm;
    iterablePipe: ObjToIterable;
    isSubform: boolean;
    dirByLang: string;
    lastSearch: string;
    listeners: any[];
    searchPlaceholder: string;
    isSearching: boolean;
    scrollLoadingText: string;
    infiniteScrollEnabled: boolean;
    itemOptions = {} as any;

    @ViewChild(FileUploader) fileUploader: FileUploader;

    constructor(private formService: FormService,
        private messageHandler: MessageHandler,
        private nav: NavController,
        private navParams: NavParams,
        private elementRef: ElementRef,
        private renderer: Renderer)
    {
        this.form = this.navParams.data.form;

        this.isSubform = this.navParams.data.isSubform;
        this.isSearching = false;
        this.iterablePipe = new ObjToIterable();
        this.dirByLang = Strings.dirByLang;
        this.searchPlaceholder = Strings.search;
        this.scrollLoadingText = Strings.scrollLoadingText;
        this.infiniteScrollEnabled = Object.keys(this.form.rows).length == RowsBatchSize;
        this.listeners = new Array();

        let buttonsSideByLang = this.dirByLang == 'rtl' ? 'left' : 'right';

        let editButton = {
            text: Strings.editBtnText,
            icon: 'create',
            color: 'favorite',
            side: buttonsSideByLang,
            click: this.editRow
        }
        let openButton = {
            text: Strings.openBtnText,
            icon: 'open',
            side: buttonsSideByLang,
            color: 'favorite',
            click: this.openAttachRow
        }
        let deleteButton = {
            text: Strings.deleteBtnText,
            icon: 'trash',
            side: buttonsSideByLang,
            color: 'danger',
            click: this.deleteRow
        }

        if (this.form.name == "EXTFILES")
        {
            this.itemOptions.slidingButtons = [deleteButton, openButton];
            this.itemOptions.itemSelect = this.openAttachRow
        }
        else
        {
            this.itemOptions.slidingButtons = [deleteButton, editButton];
            this.itemOptions.itemSelect = this.editRow
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
                this.nav.push(DetailsPage, { form: this.form, rowInd: item.key });
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
        this.messageHandler.showErrorOrWarning(false, Strings.isDelete, delFunc);
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
            let searchFields = [];
            for (var colname in this.form.columns)
            {
                if (this.form.listColumnsOptions[colname] && this.form.listColumnsOptions[colname].searchfield == 1)
                {
                    searchFields.push(colname);
                }
            }
            this.formService.setFilter(this.form, searchFields, val).then(
                result =>
                {
                    this.isSearching = false;
                }, reason =>
                {
                    if (searchFields.length == 0)
                    {
                        this.messageHandler.showErrorOrWarning(true, Strings.searchError, () => { }, () => { }, { title: Strings.errorTitle });
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
                this.nav.push(DetailsPage, { form: this.form, rowInd: newRowInd });
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