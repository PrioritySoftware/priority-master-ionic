import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Camera } from '@ionic-native/camera';
import { Device } from '@ionic-native/device';
import { StatusBar } from '@ionic-native/status-bar';
import { Globalization } from '@ionic-native/globalization';
import { SplashScreen } from '@ionic-native/splash-screen'

import { AppComponent } from './app.component';
import { AppService } from '../services/app.service';
import { Strings } from './app.config';

import { LoginPage } from '../pages/Login/login.page';
import { ListPage } from '../pages/List/list.page';
import { DetailsPage } from '../pages/Details/details.page';
import { MainPage } from '../pages/Main/main.page';
import { SearchPage } from '../pages/Search/search.page';
import { StartPage } from '../pages/Start/start.page';
import { TextPage } from '../pages/Text/text.page';
import { AppsPage } from '../pages/Apps/apps.page';

import { SubList } from "../components/SubList/subList.component";
import { DirectActivations } from "../components/DirectActivations/direct-activations.component";

import { PriorityIonicModule } from 'priority-ionic';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    MainPage,
    ListPage,
    TextPage,
    SubList,
    DirectActivations,
    SearchPage,
    DetailsPage,
    StartPage,
    AppsPage
  ],
  imports: [
    HttpModule,
    IonicModule.forRoot(AppComponent),
    IonicStorageModule.forRoot(),
    PriorityIonicModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    LoginPage,
    MainPage,
    ListPage,
    StartPage,
    TextPage,
    SubList,
    DirectActivations,
    SearchPage,
    DetailsPage,
    AppsPage
  ],
  providers: [
    Strings,
    AppService,
    BarcodeScanner,
    Camera,
    Device,
    SplashScreen,
    Globalization,
    StatusBar
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
