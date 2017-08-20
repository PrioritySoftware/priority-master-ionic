import { Component } from "@angular/core";
import { FormService, SearchResult, SearchAction, Form,Search } from 'priority-ionic';
import { ViewChild } from '@angular/core';;
import { NavController, NavParams,Searchbar } from 'ionic-angular';
import { Strings } from '../../app/app.config';
import { AppService } from '../../services/app.service';

@Component({
    templateUrl: 'search.view.html'
})

export class SearchPage
{
    isShowWaitingDots: boolean;
    isScrollEnabled: boolean;
    searchResults: SearchResult[] = null;
    chooseHeader1: string;
    chooseHeader2: string;
    isSearch: boolean;
    fieldVal: string;
    title: string;
    placeholder: string;
    form: Form;
    rowInd;

    dirByLang: string;

    @ViewChild('searchbar') searchBar:Searchbar;

    constructor(private formService: FormService,
        private nav: NavController,
        private navParams: NavParams,
        private strings: Strings,
        private appService: AppService)
    {
        this.isSearch = false;
        this.isShowWaitingDots = false;
        this.dirByLang = this.strings.dirByLang;
        this.placeholder = this.strings.search;
    }
    ionViewDidLoad()
    {
        this.isSearch = this.navParams.data.searchObj.SearchLine != null;
        this.searchResults = this.navParams.data.searchObj.SearchLine == null ? this.navParams.data.searchObj.ChooseLine : this.navParams.data.searchObj.SearchLine;
        this.chooseHeader1 = this.navParams.data.searchObj.title1;
        this.chooseHeader2 = this.navParams.data.searchObj.title2;
        this.fieldVal = this.navParams.data.value;
        this.title = this.navParams.data.column.title;
        this.form = this.navParams.data.form;
        this.rowInd = this.navParams.data.rowInd;
        this.isScrollEnabled = true;
    }
    ionViewDidEnter()
    {
        setTimeout(() =>
        {
            if (this.searchBar !== undefined)
            {
                this.searchBar.setFocus();
            }
        }, 150);
    }
    getSecondSearchResult(item: SearchResult)
    {
        if (!item.retval || item.retval == item.string1)
        {
            return item.string2;
        }
        else
        {
            return item.string1;
        }
    }
    getSearchResult(item: SearchResult)
    {
        return item.retval || item.string1;
    }
    getItemsBySearchText(ev)
    {
        this.isShowWaitingDots = true;
        this.isScrollEnabled=true;
        this.formService.search(this.form, this.fieldVal).then(
            (res:Search) =>
            {
                this.isShowWaitingDots = false;

                this.searchResults = res.SearchLine;
            }, reason =>
            {
                this.isShowWaitingDots = false;
            });
    }
    updateField(val, colName, isUpdateAfterError = true)
    {
        this.formService.updateField(this.form, this.rowInd, colName, val).then(
            result =>
            {
                this.nav.pop();

            }, reason =>
            {
                let colName = this.navParams.data.column.key;
                this.formService.getFormRow(this.form, this.rowInd)[colName] = this.fieldVal;
                if (isUpdateAfterError)
                {
                    this.updateField(this.fieldVal, colName, false);
                }
            });
    }
    selectItem(item)
    {
        let colName = this.navParams.data.column.key;

        if (this.fieldVal != this.getSearchResult(item))
            this.updateField(this.getSearchResult(item), colName);
        else
            this.nav.pop();

    }
    doInfinite(infiniteScroll)
    {
        this.formService.search(this.form, this.fieldVal, SearchAction.Next)
            .then((result:Search) =>
            {
                let results=result.SearchLine;
                if (results != null && results.length > 0)
                {
                    let slice = this.searchResults.slice(0, this.searchResults.length - 1);
                    this.searchResults = slice.concat(results);
                }
                if (result.next<=0)
                {
                    this.isScrollEnabled = false;
                }
                infiniteScroll.complete();
            })
            .catch(reason =>
            {
                infiniteScroll.complete();
            });
    }
    leavePage = () =>
    {
        this.nav.pop();
    }
}