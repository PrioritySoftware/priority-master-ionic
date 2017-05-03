import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Strings } from '../../app/app.config';
import { MessageHandler, FormService } from 'priority-ionic';
import { CustomForm } from "../../entities/form.class";

@Component({
  selector: 'page-text',
  templateUrl: 'text.view.html'
})
export class TextPage
{

  form: CustomForm;
  text: string;
  dirByLang: string;
  saveBtnText: string;
  textPlaceholder: string;
  title: string;
  isHtmlEditable: boolean | number;

  isChangesSaved: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formService: FormService,private messageHandler:MessageHandler)
  {
    this.form = navParams.data.form;
    this.dirByLang = Strings.dirByLang;
    this.saveBtnText = Strings.saveBtnText;
    this.textPlaceholder = Strings.textPlaceholder;
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
