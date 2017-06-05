import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Camera } from '@ionic-native/camera';

import { AppComponent } from './app.component';
import { AppService } from '../services/app.service';

import { LoginPage } from '../pages/Login/login.page';
import { ListPage } from '../pages/List/list.page';
import { DetailsPage } from '../pages/Details/details.page';
import { MainPage } from '../pages/Main/main.page';
import { SearchPage } from '../pages/Search/search.page';
import { StartPage } from '../pages/Start/start.page';
import { TextPage } from '../pages/Text/text.page';

import { SubList } from "../components/SubList/subList.component";

import { PriorityIonicModule } from 'priority-ionic';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    MainPage,
    ListPage,
    TextPage,
    SubList,
    SearchPage,
    DetailsPage,
    StartPage
  ],
  imports: [
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
    SearchPage,
    DetailsPage
  ],
  providers: [
    AppService,
    BarcodeScanner,
    Camera

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
