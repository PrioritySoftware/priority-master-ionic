import { Component } from '@angular/core';
import { NavParams,ViewController } from 'ionic-angular';
import { Form, MessageHandler, FormService } from 'priority-ionic';
import { Strings } from '../../app/app.config';
import { FormConfig } from '../../entities/form.class';

@Component({
    selector: 'direct-activations',
    templateUrl: 'direct-activations.html'
})
export class DirectActivations
{
    form: Form;
    formConfig: FormConfig;

    constructor(private navParams: NavParams,
        private messageHandler: MessageHandler,
        private formService: FormService,
        private strings: Strings,
        private viewCtrl:ViewController)
    {
        this.form = navParams.data.form;
        this.formConfig = navParams.data.formConfig;
    }

    startDirectActivation(activation)
    {
        let act = activation.key.split(".");
        if (act.length == 2)
        {
            this.viewCtrl.dismiss();
            this.messageHandler.showLoading(this.strings.loadData);
            this.formService.executeDirectActivation(this.form, act[0], act[1])
                .then(() => this.messageHandler.hideLoading())
                .catch(() => this.messageHandler.hideLoading());
        }
    }
}