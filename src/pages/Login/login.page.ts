import { Platform } from 'ionic-angular';
import { Component } from "@angular/core";
import { AppService } from "../../services/app.service";
import { NavController, NavParams } from 'ionic-angular';
import { MainPage } from "../Main/main.page";
import { Strings } from '../../app/app.config';
import { MessageHandler, ServerResponse } from 'priority-ionic';

@Component({
    selector: 'login-page',
    templateUrl: 'login.view.html',
    entryComponents: [MainPage]
})

export class LoginPage
{
    usrValue = '';
    pswValue = '';
    oldPswValue = '';
    newPswValue = '';
    confirmPswValue = '';
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


    isChangePassword()
    {
        return this.appService.loginExpired;
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
            (reason : ServerResponse) =>
            {
                this.messageHandler.hideLoading(
                    () =>
                    {
                        if(!this.appService.loginExpired)
                        {
                            this.messageHandler.showToast(reason.message, 3000);
                        }
                    });
            }
        ).catch(() => { });
    }

    changePsw()
    {
        this.messageHandler.showTransLoading();
        this.appService.changePassword(this.newPswValue, this.confirmPswValue, this.oldPswValue).then(
            (res : string) =>
            {
                let username = this.usrValue.trim() ? this.usrValue.trim() : this.appService.userName;
                this.appService.logIn(username, this.newPswValue).then(
                    (res) =>
                    {
                        this.messageHandler.hideLoading();
                        this.nav.setRoot(MainPage,{}, {animate: true, direction: 'forward'}, ()=>{this.messageHandler.showToast(this.strings.changePswMessageOk, 3000);}); 
                    },
                    (reason : ServerResponse) =>
                    {
                        this.messageHandler.hideLoading(
                            () =>
                            {
                                this.messageHandler.showToast(reason.message, 3000);
                            });
                    }).catch(() => { });
            },
            (reason : ServerResponse )=>
            {
                this.newPswValue = '';
                this.confirmPswValue = '';
                this.messageHandler.hideLoading(
                    ()=>
                    {
                        this.messageHandler.showToast(reason.message, 3000);
                    }
                );
                
            });
        
    }

    eventHandler(evnt)
    {
        let key = evnt.key;
        if (key == "Enter")
        {
            if(this.appService.loginExpired)
                this.changePsw();
            else
                this.login();
        }
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