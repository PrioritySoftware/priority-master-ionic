import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Keyboard, Globalization, Splashscreen } from 'ionic-native';
import { Component, ViewChild } from '@angular/core';
import { AppService } from '../services/app.service';
import { LoginPage } from '../pages/Login/login.page';
import { MainPage } from "../pages/Main/main.page";
import { StartPage } from '../pages/Start/start.page';
import { AppsPage } from '../pages/Apps/apps.page';
import { Strings } from './app.config';
import { MessageHandler, Constants } from 'priority-ionic';
declare var window;

@Component({
  templateUrl: "app.html"
})

export class AppComponent
{
  rootPage: any = null;
  strings = Strings;
  dirByLang: string;
  currentClickOffset;

  @ViewChild(Nav) nav;

  constructor(private platform: Platform,
              private appService: AppService,
              private messageHandler: MessageHandler)
  {
    window['priorityReady'] = this.priorityReady;
    this.dirByLang = "";

    platform.ready().then(() =>
    {
      platform.registerBackButtonAction(() => { this.leavePage(); },100);
      StatusBar.styleDefault();
      if (window.cordova)
      {
        Globalization.getPreferredLanguage().then((language) =>
        {
          if (language.value == 'en' || language.value == 'en-US' || language.value == 'US')
          {
            Strings.setFirstLtrConstants();
            Constants.setLtrTranslations();
          }
          else
          {
            Strings.setFirstRtlConstants();
            Constants.setRtlTranslations();
          }
        });
      }
      else
      {
        Strings.setFirstLtrConstants();
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
              //   Splashscreen.hide();
              // });
              // Using the setRoot function caused bugs with change detection in details page
              // We need to check if they still appear in later version of ionic
              this.rootPage = MainPage;
            }
            else
            {
              // this.nav.setRoot(LoginPage,{},{animation: false}).then(() =>
              // {
              //   Splashscreen.hide();
              // });
              this.rootPage = LoginPage;
            }
            this.messageHandler.hideLoading();
            Splashscreen.hide();
          },
          (reason) =>
          {
            //show start page to re-scan barcode if the json file is not valid.
            // this.nav.setRoot(StartPage,{},{animation: false}).then(() =>
            // {
            //   Splashscreen.hide();
            //   this.messageHandler.showErrorOrWarning(true, reason + Strings.scanNewConfigurationFile);
            // });
            if(this.appService.appsList.length > 1)
            {
              this.rootPage = AppsPage;
              this.messageHandler.hideLoading();
              Splashscreen.hide();
            }
            else
            {
              this.rootPage = StartPage;
              this.messageHandler.hideLoading();
              Splashscreen.hide();
              this.messageHandler.showErrorOrWarning(true, reason + Strings.scanNewConfigurationFile);
            }
          });
      },
      //show start page to scan barcode if url not found
      //or apps page, if user has already scanned apps
      (reason) =>
      {
        if(this.appService.appsList.length)
        {
          this.rootPage = AppsPage;
        }
        else
        {
          this.rootPage = StartPage;
        }
        this.messageHandler.hideLoading();
        Splashscreen.hide();
        // this.nav.setRoot(StartPage,{},{animation: false}).then(() =>
        // {
        //   Splashscreen.hide();
        // });
      });
  }

  logout = () =>
  {
    this.appService.clearLogin();
    this.nav.setRoot(LoginPage, {}, {animate: true, direction: 'forward'});
  }

  switchApp = () =>
  {
    this.appService.clearCurrentApp();
    this.nav.setRoot(AppsPage, {}, {animate: true, direction: 'forward'});
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
