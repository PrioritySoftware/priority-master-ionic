import { Component } from "@angular/core";
import { FormService, SearchResult } from 'priority-ionic';
import { ViewChild } from '@angular/core';;
import { NavController, NavParams } from 'ionic-angular';
import { Strings } from '../../app/app.config';

@Component({
    templateUrl: 'search.view.html'
})


export class SearchPage
{
    isShowWaitingDots: boolean;
    searchResults: SearchResult[] = null;
    chooseHeader1: string;
    chooseHeader2: string;
    isSearch: boolean;
    fieldVal: string;
    title: string;
    placeholder: string;
    form;

    dirByLang: string;

    @ViewChild('searchbar') searchBar;

    constructor(private formService: FormService, private nav: NavController, private navParams: NavParams)
    {
        this.isSearch = false;
        this.isShowWaitingDots = false;
        this.dirByLang = Strings.dirByLang;
        this.placeholder = Strings.search;
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
        if (item.retval == item.string1)
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
        return item.retval;
    }
    getItemsBySearchText(ev)
    {
        this.isShowWaitingDots = true;
        this.formService.search(this.form, this.fieldVal).then(
            res =>
            {
                this.isShowWaitingDots = false;

                this.searchResults = res;
            }, reason =>
            {
                this.isShowWaitingDots = false;
            });
    }
    updateField(val, colName)
    {

        this.formService.updateField(this.form, val, colName).then(
            result =>
            {
                this.nav.pop();

            }, reason => { });
    }
    selectItem(item)
    {
        let colName = this.navParams.data.column.name;

        if (this.fieldVal != this.getSearchResult(item))
            this.updateField(this.getSearchResult(item), colName);
        else
            this.nav.pop();

    }
    leavePage = () =>
    {
        this.nav.pop();
    }
}