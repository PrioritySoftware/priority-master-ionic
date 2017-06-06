import { Component } from "@angular/core";
import { ConfigurationService, FormService, MessageHandler, ProcService } from 'priority-ionic';
import { AppService } from '../../services/app.service';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { ListPage } from '../List/list.page';
import { LoginPage } from '../Login/login.page';
import { Strings } from '../../app/app.config';
import {Entity} from'../../entities/entity.class';

@Component({
  templateUrl: 'main.view.html',
  selector: 'main-page'
})

export class MainPage
{
  tilesList: any[];
  dirByLang;


  constructor(private appService: AppService,
    private formService: FormService,
    private procService: ProcService,
    private configService: ConfigurationService,
    private messageHandler: MessageHandler,
    private nav: NavController,
    private navParams: NavParams,
    private platform: Platform,
    private strings: Strings)
  {
    this.dirByLang = this.strings.dirByLang;
    this.tilesList = this.appService.entitiesData;
    this.formService.onFatalError = () => { this.nav.popTo(MainPage); };
  }

  isShowEntity(ent)
  {
    //returns true for procs that are not direct activations and forms that are parent forms 
    return ent.fatname == ent.name || ent.fatname === undefined;
  }

  entityChosen(ent:Entity)
  {
    if (ent.type == 'P' || ent.type=='R')
    {
      this.messageHandler.showTransLoading();
      this.procService.startProcedure(ent.name, ent.type, this.configService.configuration.company)
        .then(() =>
        {
          this.messageHandler.hideLoading();
        })
        .catch(() =>
        {
          this.messageHandler.hideLoading();
        });

    }
    else if (ent.type == 'F')
    {

      this.messageHandler.showLoading(this.strings.wait);
      this.formService.startFormAndGetRows(ent.name, this.configService.configuration.company).then(
        form =>
        {
          this.messageHandler.hideLoading();
          this.nav.push(ListPage,
            {
              form: form
            },
            { animate: true });
        },
        reason => { this.messageHandler.hideLoading(); });
    }
  }
  logOut = () =>
  {
    let buttons = [
      {
        text: this.strings.ok,
        click: () =>
        {
          this.appService.clearLogin();
          this.nav.setRoot(LoginPage);
        }
      },
      {
        text: this.strings.cancel,
        click: () => { }
      }];
    this.messageHandler.showMessage(this.strings.isExitApp, buttons);
  }
}

