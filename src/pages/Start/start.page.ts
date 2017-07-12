import { Component } from "@angular/core";
import { NavController, NavParams, Platform } from 'ionic-angular';
import { AppService } from "../../services/app.service";
import { PermissionsService, MessageHandler, ServerResponse } from 'priority-ionic';
import { LoginPage } from '../Login/login.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Strings } from '../../app/app.config';

@Component({
    templateUrl: 'start.view.html'
})

export class StartPage
{
    isShowBack: boolean;
    showScan: boolean;
    showLoading: boolean;

    /* strings */
    dirByLang: string;
    header: string;
    header2: string;
    scanInstructions: string;
    scanButton: string;
    preparingApp: string;

    constructor(private appService: AppService,
        private nav: NavController,
        private navParams: NavParams,
        private messageHandler: MessageHandler,
        private permissions: PermissionsService,
        private barcodeScanner: BarcodeScanner,
        private platform: Platform,
        private strings: Strings)
    {
        this.showScan = true;
        this.showLoading = false;
        this.isShowBack = navParams.data.isShowBack;

        /* strings */
        this.dirByLang = this.strings.dirByLang;
        this.scanInstructions = this.strings.scanInstructions;
        this.scanButton = this.strings.scanButton;
        this.preparingApp = this.strings.preparingApp;
    }

    /** scan barcode to get the application url */
    scan()
    {
        this.permissions.requestPermission("camera").then(
            () =>
            {
                this.barcodeScanner.scan(
                    {
                        resultDisplayDuration: 0,
                        formats: "QR_CODE",
                        orientation: "portrait"
                    }).then(
                    result =>
                    {
                        if (result.text == undefined || result.text == "")
                        {
                            this.messageHandler.showToast(this.strings.scanError, 3000);
                        }
                        else
                        {
                            this.showScan = false;
                            this.showLoading = true;
                            //init app with the result json url
                            this.appService.initApp(result.text).then(
                                () =>
                                {
                                    //set the json in local storage
                                    this.appService.setJsonUrl(result.text);
                                    //go to login
                                    this.nav.setRoot(LoginPage);
                                },
                                (reason : ServerResponse) =>
                                {
                                    this.showScan = true;
                                    this.showLoading = false;
                                    this.messageHandler.showErrorOrWarning(true, reason.message);
                                });
                        }
                    },
                    reason =>
                    {
                        this.messageHandler.showToast(this.strings.scanError, 3000);
                    })
            }).catch(() => { this.messageHandler.showToast(this.strings.scanError, 3000); });
    }


    leavePage = () =>
    {
        if (this.nav.canGoBack())
        {
            this.nav.pop();
        }
        else
        {
            this.platform.exitApp();
        }
    }
}