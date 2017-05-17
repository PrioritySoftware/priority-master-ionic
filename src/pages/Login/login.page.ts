import { Platform } from 'ionic-angular';
import { Component } from "@angular/core";
import { AppService } from "../../services/app.service";
import { NavController } from 'ionic-angular';
import { MainPage } from "../Main/main.page";
import { Strings } from '../../app/app.config';
import { MessageHandler } from 'priority-ionic';

@Component({
    selector: 'page-login',
    templateUrl: 'login.view.html',
    entryComponents: [MainPage]
})

export class LoginPage
{
    usrValue;
    pswValue;
    usrTitle;
    pswTitle;
    loginBtn;
    loginHeader;
    dirByLang;
    dirOpposite;

    constructor(private appService: AppService, private nav: NavController, private platform: Platform, private messageHandler: MessageHandler)
    {
        this.usrTitle = Strings.usrTitle;
        this.pswTitle = Strings.pswTitle;
        this.loginBtn = Strings.loginBtn;
        this.loginHeader = Strings.loginHeader;
        this.dirByLang = Strings.dirByLang;
        this.dirOpposite = Strings.dirOpposite;
        this.usrValue="";
        this.pswValue="";
    }

    login()
    {
        this.messageHandler.showTransLoading();
        let username = this.usrValue.trim();
        this.appService.logIn(username, this.pswValue).then(
            res =>
            {
                this.messageHandler.hideLoading();
                this.nav.setRoot(MainPage);
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
        this.platform.exitApp();
    }

}