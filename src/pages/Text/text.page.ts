import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Strings } from '../../app/app.config';
import { MessageHandler, FormService, Form } from 'priority-ionic';

@Component({
  selector: 'text-page',
  templateUrl: 'text.view.html'
})
export class TextPage
{

  form: Form;
  text: string;
  dirByLang: string;
  saveBtnText: string;
  textPlaceholder: string;
  title: string;
  isHtmlEditable: boolean | number;

  isChangesSaved: boolean;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private formService: FormService,
              private messageHandler:MessageHandler,
              private strings:Strings)
  {
    this.form = navParams.data.form;
    this.dirByLang = this.strings.dirByLang;
    this.saveBtnText = this.strings.saveBtnText;
    this.textPlaceholder = this.strings.textPlaceholder;
    this.isChangesSaved = true;
    this.title = this.form.title;
    this.isHtmlEditable = this.form.ishtmleditable;
    this.text = "";
  }

  leavePage = () =>
  {
    if (!this.isChangesSaved)
      this.messageHandler.showChangesNotSaved(this.saveText, this.endAndLeave);
    else
    {
      this.endAndLeave();
    }
  }

  endAndLeave = () =>
  {
    this.formService.endForm(this.form).then(
      result =>
      {
        this.navCtrl.pop();
      }, reason => { });
  }

  getHTML()
  {
    if (this.form.rows["1"] != null)
      return this.form.rows["1"].htmltext;
    return "";
  }

  saveText = () =>
  {
    if (this.text.trim() != "")
    {
      this.formService.saveText(this.form, this.text).then(() =>
      {
        this.endAndLeave();
      }, reason => { })
    }
    else
    {
      this.endAndLeave();
    }
  }

  onTextChange(value)
  {
    if (value != "")
      this.isChangesSaved = false;
    else
    {
      this.isChangesSaved = true;
    }
  }

}
