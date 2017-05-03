import { Component } from "@angular/core";
import { ConfigurationService, FormService, MessageHandler, ProcService } from 'priority-ionic';
import { AppService } from '../../services/app.service';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { ListPage } from '../List/list.page';
import { LoginPage } from '../Login/login.page';
import { Strings } from '../../app/app.config';

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
    private platform: Platform)
  {
    this.dirByLang = Strings.dirByLang;
    this.tilesList = this.appService.entitiesData;
    this.formService.onFatalError = () => { this.nav.popTo(MainPage); };
  }

  isShowEntity(ent)
  {
    //returns true for procs and forms that are parent forms 
    return (ent.type == 'F' && (ent.fatname === ent.name || ent.fatname === undefined)) || ent.type == 'P';
  }

  entityChosen(ent)
  {
    if (ent.type == 'P')
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

      this.messageHandler.showLoading(Strings.wait);
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
        text: Strings.ok,
        onClick: () =>
        {
          this.appService.clearLogin();
          this.nav.setRoot(LoginPage);
        }
      },
      {
        text: Strings.cancel,
        onClick: () => { }
      }];
    this.messageHandler.showMessage(Strings.isExitApp, buttons);
  }
}

