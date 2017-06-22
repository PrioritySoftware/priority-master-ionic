import { Platform } from 'ionic-angular';
import { Component } from "@angular/core";
import { AppService } from "../../services/app.service";
import { NavController, NavParams } from 'ionic-angular';
import { MainPage } from "../Main/main.page";
import { Strings } from '../../app/app.config';
import { MessageHandler } from 'priority-ionic';

@Component({
    selector: 'login-page',
    templateUrl: 'login.view.html',
    entryComponents: [MainPage]
})

export class LoginPage
{
    usrValue = '';
    pswValue = '';
    appName;
    isShowApp;
    isShowBack;

    constructor(private appService: AppService,
                private nav: NavController,
                private navParams: NavParams,
                private platform: Platform,
                private messageHandler: MessageHandler,
                private strings:Strings)
    {
        this.appName = this.appService.currentApp.title;
        this.isShowApp = this.appService.appsList.length > 1;
        this.isShowBack = navParams.data.isShowBack;
    }


    login()
    {
        this.messageHandler.showTransLoading();
        let username = this.usrValue.trim();
        this.appService.logIn(username, this.pswValue).then(
            res =>
            {
                this.messageHandler.hideLoading();
                this.nav.setRoot(MainPage,{}, {animate: true, direction: 'forward'});
            },
            reason =>
            {
                this.messageHandler.hideLoading(
                    () =>
                    {
                        this.messageHandler.showToast(reason, 3000);
                    });
            }
        ).catch(() => { });
    }

    eventHandler(evnt)
    {
        let key = evnt.key;
        if (key == "Enter")
            this.login();
    }

    leavePage = () =>
    {
        if(this.nav.canGoBack())
        {
            this.nav.pop();
        }
        else
        {
           this.platform.exitApp(); 
       }
    }

}