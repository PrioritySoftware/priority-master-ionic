import { Component } from "@angular/core";
import { NavController } from 'ionic-angular';
import { AppService } from "../../services/app.service";
import { PermissionsService, MessageHandler } from 'priority-ionic';
import { LoginPage} from '../Login/login.page';
import { BarcodeScanner } from 'ionic-native';
import { Strings } from '../../app/app.config';

@Component({
    templateUrl: 'start.view.html'
})

export class StartPage
{
    showScan: boolean;
    showLoading: boolean;

    /* strings */
    dirByLang: string;
    header: string;
    header2: string;
    scanInstructions: string;
    scanButton: string;
    preparingApp: string;

    constructor(private appService: AppService, private nav: NavController, private messageHandler: MessageHandler, private permissions: PermissionsService)
    {
        this.showScan = true;
        this.showLoading = false;

        /* strings */
        this.dirByLang = Strings.dirByLang;
        this.scanInstructions = Strings.scanInstructions;
        this.scanButton = Strings.scanButton;
        this.preparingApp = Strings.preparingApp;
    }

    /** scan barcode to get the application url */
    scan()
    {
        this.permissions.requestPermission("camera").then(
            () =>
            {
                BarcodeScanner.scan(
                    {
                        resultDisplayDuration: 0,
                        formats : "QR_CODE",
                        orientation: "portrait"
                    }).then(
                    result =>
                    {
                        if (result.text == undefined || result.text == "")
                        {
                            this.messageHandler.showToast(Strings.scanError,3000);
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
                            reason =>
                            {
                                this.showScan = true;
                                this.showLoading = false;
                                this.messageHandler.showErrorOrWarning(true, reason);
    	                    });
            	        }
                    },
                    reason =>
                    {
                        this.messageHandler.showToast(Strings.scanError, 3000);
                    })
        }).catch(() => { this.messageHandler.showToast(Strings.scanError, 3000); });
    }
}