import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MessageHandler, Constants } from 'priority-ionic';
import { AppService } from '../../services/app.service';
import { LoginPage } from '../Login/login.page';
import { MainPage } from '../Main/main.page';
import { StartPage } from '../Start/start.page';
import { Strings } from '../../app/app.config';

@Component({
    selector: 'page-apps',
    templateUrl: 'apps.view.html',
})
export class AppsPage 
{
    appsList = [];

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private appService: AppService,
        private messageHandler: MessageHandler,
        private strings: Strings)
    {
        this.appsList = this.appService.userData.applist;
    }

    selectApp(app)
    {
        this.messageHandler.showTransLoading();
        this.appService.initApp(app.jsonUrl).then(
            (isLoggedIn) =>
            {
                //set the json in local storage
                this.appService.setJsonUrl(app.jsonUrl);
                if (isLoggedIn)
                {
                    this.messageHandler.hideLoading();
                    this.navCtrl.setRoot(MainPage, {}, { animate: true, direction: 'forward' });
                }
                else
                {
                    //go to login
                    this.messageHandler.hideLoading();
                    this.navCtrl.push(LoginPage, { isShowBack: true });
                }
            },
            (reason) =>
            {
                this.messageHandler.showErrorOrWarning(true, reason);
            })
    }

    newApp()
    {
        if (this.strings.deviceLang == "rtl")
        {
            this.strings.setFirstRtlConstants();
            Constants.setRtlTranslations();
        }
        else
        {
            this.strings.setFirstLtrConstants();
            Constants.setLtrTranslations();
        }
        this.navCtrl.push(StartPage, { isShowBack: true });
    }

    deleteApp(app)
    {
        let buttons = [
            {
                text: this.strings.ok,
                click: () =>
                {
                    this.appService.deleteApp(app);
                }
            },
            {
                text: this.strings.cancel,
                click: () => { }
            }];
        this.messageHandler.showMessage(this.strings.isDelete, buttons);
    }
}
