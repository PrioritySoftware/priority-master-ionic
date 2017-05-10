import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Keyboard, Globalization, Splashscreen } from 'ionic-native';
import { Component, ViewChild } from '@angular/core';
import { AppService } from '../services/app.service';
import { LoginPage } from '../pages/Login/login.page';
import { MainPage } from "../pages/Main/main.page";
import { StartPage } from '../pages/Start/start.page';
import { Strings } from './app.config';
import { MessageHandler, Constants } from 'priority-ionic';
declare var window;

@Component({

  template: `<ion-nav [root]="rootPage"></ion-nav>`,
  entryComponents: [
    LoginPage,
    StartPage,
    MainPage
  ]
})

export class AppComponent
{
  rootPage: any = null;

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

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      Keyboard.disableScroll(true);
      window.addEventListener('native.keyboardshow', this.keyboardShowHandler);
      window.addEventListener('native.keyboardhide', this.keyboardHideHandler);
      window.addEventListener('touchstart', this.touchStartHandler);
      // for IOS 
      //scroll - content {
      //   padding-bottom:0!important;
      // }
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
            this.rootPage = StartPage;
            this.messageHandler.hideLoading();
            Splashscreen.hide();
          });
      },
      //show start page to scan barcode if url not found
      (reason) =>
      {
        // this.nav.setRoot(StartPage,{},{animation: false}).then(() =>
        // {
        //   Splashscreen.hide();
        // });
        this.rootPage = StartPage;
        this.messageHandler.hideLoading();
        Splashscreen.hide();
      });
  }

  /**Keyboard events */
  keyboardShowHandler = (e) =>
  {
    let kH = e.keyboardHeight;

    if (this.currentClickOffset < kH + 40)
    {
      this.nav._elementRef.nativeElement.style.bottom = (kH - this.currentClickOffset + 40) + "px";
      // this.nav._elementRef.nativeElement.style.top = "initial !important";
    }

  }
  keyboardHideHandler = () =>
  {
    this.nav._elementRef.nativeElement.style.bottom = '0';
    // this.nav._elementRef.nativeElement.style.top = '50px !important';
  }
  touchStartHandler = (e) =>
  {
    let clickHeight = e.touches[0].clientY;
    let deviceHeight = window.innerHeight;
    this.currentClickOffset = (deviceHeight - clickHeight);
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
