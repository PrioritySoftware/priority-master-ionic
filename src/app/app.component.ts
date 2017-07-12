import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Globalization } from '@ionic-native/globalization';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Component, ViewChild } from '@angular/core';
import { AppService } from '../services/app.service';
import { LoginPage } from '../pages/Login/login.page';
import { MainPage } from "../pages/Main/main.page";
import { StartPage } from '../pages/Start/start.page';
import { AppsPage } from '../pages/Apps/apps.page';
import { Strings } from './app.config';
import { MessageHandler, Constants, ServerResponse } from 'priority-ionic';
declare var window;

@Component({
  templateUrl: "app.html"
})

export class AppComponent
{
  rootPage: any = null;
  dirByLang: string;
  currentClickOffset;

  @ViewChild(Nav) nav;

  constructor(private platform: Platform,
    private appService: AppService,
    private messageHandler: MessageHandler,
    private strings: Strings,
    private statusBar: StatusBar,
    private globalization: Globalization,
    private splashScreen: SplashScreen)
  {
    window['priorityReady'] = this.priorityReady;
    this.dirByLang = "";

    platform.ready().then(() =>
    {

      platform.registerBackButtonAction(() => { this.leavePage(); }, 100);
      this.statusBar.styleDefault();
      if (window.cordova)
      {
        this.globalization.getPreferredLanguage().then((language) =>
        {
          if (language.value.startsWith('iw') || language.value.startsWith('he'))
          {
            this.strings.deviceLang = "rtl";
            this.strings.setFirstRtlConstants();
            Constants.setRtlTranslations();
          }
          else
          {
            this.strings.deviceLang = "ltr";
            this.strings.setFirstLtrConstants();
            Constants.setLtrTranslations();
          }
        });
      }
      else
      {
        this.strings.deviceLang = "ltr";
        this.strings.setFirstLtrConstants();
        Constants.setLtrTranslations();
      }
    });
  }
  /**Called from Priority API when all its files are ready.
   * Sets the language and the rootPage.
   */
  priorityReady = (json) =>
  {
    this.messageHandler.showTransLoading("hide");
    //fetch json url from localstorage or return localpath url if local json exists
    this.appService.jsonUrl().then(
      url =>
      {
        this.appService.initApp(url).then(
          //init app also logs in when username and password exist in localstorage
          (isLoggedIn) =>
          {
            if (isLoggedIn)
            {
              // this.nav.setRoot(MainPage,{},{animation: false}).then(() =>
              // {
              //   this.splashScreen.hide();
              // });
              // Using the setRoot function caused bugs with change detection in details page
              // We need to check if they still appear in later version of ionic
              this.rootPage = MainPage;
            }
            else
            {
              // this.nav.setRoot(LoginPage,{},{animation: false}).then(() =>
              // {
              //   this.splashScreen.hide();
              // });
              this.rootPage = LoginPage;
            }
            this.messageHandler.hideLoading();
            this.splashScreen.hide();
          },
          (reason: ServerResponse) =>
          {
            //show start page to re-scan barcode if the json file is not valid.
            // this.nav.setRoot(StartPage,{},{animation: false}).then(() =>
            // {
            //   this.splashScreen.hide();
            //   this.messageHandler.showErrorOrWarning(true, reason + this.strings.scanNewConfigurationFile);
            // });
            if (this.appService.appsList.length > 1)
            {
              this.rootPage = AppsPage;
              this.messageHandler.hideLoading();
              this.splashScreen.hide();
            }
            else
            {
              this.rootPage = StartPage;
              this.messageHandler.hideLoading();
              this.splashScreen.hide();
              this.messageHandler.showErrorOrWarning(true, reason.message + this.strings.scanNewConfigurationFile);
            }
          });
      },
      //show start page to scan barcode if url not found
      //or apps page, if user has already scanned apps
      (reason : ServerResponse) =>
      {
        if (this.appService.appsList.length)
        {
          this.rootPage = AppsPage;
        }
        else
        {
          this.rootPage = StartPage;
        }
        this.messageHandler.hideLoading();
        this.splashScreen.hide();
        // this.nav.setRoot(StartPage,{},{animation: false}).then(() =>
        // {
        //   this.splashScreen.hide();
        // });
      });
  }
  
  getAppName = () =>
  {
    return this.appService.currentApp.title 
  }

  getUserName = () =>
  {
    return this.appService.userName;
  }

  logout = () =>
  {
    this.appService.clearLogin();
    this.nav.setRoot(LoginPage, {}, { animate: true, direction: 'forward' });
  }

  switchApp = () =>
  {
    this.appService.clearCurrentApp();
    this.nav.setRoot(AppsPage, {}, { animate: true, direction: 'forward' });
  }

  OpenDocument = (url : string) =>
  {
    window.open(encodeURI(url), "_system");
  }


  /**Determines what action should be taken when leaving the current page.
   * If there is a date picker present hide it.
   * Else if the current page has a function than handles its leaving - call it.
   * Else exit the app.
   */
  leavePage = () =>
  {
    if (this.nav.last().instance.leavePage != null)
    {
      this.nav.last().instance.leavePage();
    }
    else
    {
      this.platform.exitApp();
    }
  }
}
