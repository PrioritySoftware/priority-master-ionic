import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Camera } from '@ionic-native/camera';

import { AppComponent } from './app.component';
import { AppService } from '../services/app.service';
import {Strings} from './app.config';

import { LoginPage } from '../pages/Login/login.page';
import { ListPage } from '../pages/List/list.page';
import { DetailsPage } from '../pages/Details/details.page';
import { MainPage } from '../pages/Main/main.page';
import { SearchPage } from '../pages/Search/search.page';
import { StartPage } from '../pages/Start/start.page';
import { TextPage } from '../pages/Text/text.page';
import { AppsPage } from '../pages/Apps/apps.page';

import { SubList } from "../components/SubList/subList.component";
import {DirectActivations} from "../components/DirectActivations/direct-activations.component";

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
    IonicModule.forRoot(AppComponent),
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
    Storage,
    Strings,
    AppService,
    BarcodeScanner,
    Camera

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
