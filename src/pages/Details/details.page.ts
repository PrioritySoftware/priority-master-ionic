import { NavController, PopoverController, NavParams, Popover } from 'ionic-angular';
import { Component } from '@angular/core';
import { ListPage } from '../List/list.page';
import { SearchPage } from '../Search/search.page';
import { Strings } from '../../app/app.config';
import { FormService, MessageHandler, MenuPopup } from 'priority-ionic';
import { Search, Form, Column, ButtonOptions } from 'priority-ionic';
import { FormConfig } from "../../entities/form.class";
import { AppService } from "../../services/app.service";
import { DirectActivation } from "../../entities/direct-activation.class";
declare var window;


@Component({
    selector: 'details-page',
    templateUrl: 'details.view.html'
})

export class DetailsPage
{
    selectedItem;
    form: Form;
    parentForm: Form;
    formConfig: FormConfig;
    activations: ButtonOptions[];
    activationsPopover: Popover;
    subforms;
    rowInd;

    isSubform: boolean;
    isShowWaitingDots: boolean;
    isLeaveWithoutCheckchanges: boolean;
    isLeave = true;

    dirByLang: string;
    dirOpposite: string;
    title: string;

    constructor(private appService: AppService,
        private formService: FormService,
        private nav: NavController,
        private navParams: NavParams,
        private popoverCtrl: PopoverController,
        private messageHandler: MessageHandler,
        private strings: Strings)
    {
        //data
        this.form = this.navParams.data.form;
        this.parentForm = this.navParams.data.parentForm;
        this.formConfig = this.appService.getFormConfig(this.form, this.parentForm);
        this.setDirectActivations();
        this.rowInd = this.navParams.data.rowInd;
        this.isSubform = this.navParams.data.isSubform;
        this.selectedItem = this.formService.getFormRow(this.form, this.rowInd);
        this.setIsChangesSaved(true);
        this.subforms = [];
        this.getSubForms();

        //strings
        this.dirOpposite = this.strings.dirOpposite;
        this.dirByLang = this.strings.dirByLang;

        this.isShowWaitingDots = false;
    }


    // ****************** Page Leaving ***************************
    leavePage = () =>
    {
        if (this.activationsPopover && this.activationsPopover.isOverlay)
        {
            this.activationsPopover.dismiss();
            return;
        }
        if (this.isLeave)//Maybe backbutton was pressed for other functionality, then we shouldn't leave the page (isLeave = false)
        {
            if (!this.getIsChangesSaved())
            {
                this.messageHandler.showChangesNotSaved(
                    this.saveRow,
                    () =>
                    {
                        this.undoRow(true, this.leavePage);
                    });
            }
            else
            {
                //Clear subform rows - that refer to the current item.
                this.clearSubforms();
                //If current item is a new row item that wasn't saved we should delete it.
                if (this.selectedItem.isNewRow)
                {
                    this.formService.deleteLastFormRow(this.form);
                }
                //If current item is a subform item we should first end the subfrom. 
                if (this.isSubform)
                {
                    this.formService.endForm(this.form).then(
                        () =>
                        {
                            this.nav.pop();
                        }, () => { });
                }
                else 
                {
                    this.nav.pop();
                }

            }
        }
        else
        {
            this.isLeave = true;//reset the isLeave to true for the next time
        }
    }

    // ****************** General ***************************
    setIsChangesSaved(isSaved: boolean)
    {
        this.formService.setIsRowChangesSaved(this.form, this.rowInd, isSaved);
    }
    getIsChangesSaved()
    {
        return this.formService.getIsRowChangesSaved(this.form, this.rowInd);
    }


    columnClicked(column: Column)
    {
        if (column.zoom == "Search" || column.zoom == "Choose")
        {
            this.openSearchList(column);
        }
    }

    // ****************** Subforms ***************************

    /** Get subform rows for current item */
    getSubForms()
    {
        for (var ind in this.formConfig.subforms)
        {
            let subformName = this.formConfig.subforms[ind];
            let subform = this.formService.getForm(subformName, this.form);
            subform.name = subformName;
            this.subforms.push(subform);
        }
        this.messageHandler.showTransLoading();
        this.formService.getSubForms(this.form, this.formConfig.subforms, this.rowInd).then(
            () =>
            {
                this.messageHandler.hideLoading();
            },
            reason => { this.messageHandler.hideLoading(); });
    }

    clearSubforms = () =>
    {
        this.formService.clearSubforms(this.subforms);
    }

    goToSubform(subformFunc)
    {
        if (!this.getIsChangesSaved())
            this.messageHandler.showChangesNotSaved(
                () =>
                {
                    this.saveRow(subformFunc);
                },
                () =>
                {
                    this.undoRow(true, subformFunc);
                }
            );
        else if (this.selectedItem.isNewRow)
        {
            this.messageHandler.showToast(this.strings.cannotGoToSubForm, 3000);
        }
        else
        {
            subformFunc();
        }
    }

    expandSubformList(subform)
    {
        this.formService.startSubform(this.form, subform.name).then(
            () =>
            {
                this.nav.push(ListPage, { form: subform, isSubform: true, parentForm: this.form });
            },
            () => { });
    }
    sortSubforms = (subform1: FormConfig, subform2: FormConfig) =>
    {
        if (subform1.pos > subform2.pos)
        {
            return 1;
        }
        if (subform2.pos > subform1.pos)
        {
            return -1;
        }
        return 0;
    }




    // ****************** Serch / Choose ***************************

    /**Navigates to 'Search' page and shows search results there. */
    openSearchList(column: Column)
    {
        let value = this.selectedItem[column.key] ? this.selectedItem[column.key] : '';
        this.formService.openSearchOrChoose(this.form, column.key, value).then(
            (res: Search) =>
            {
                this.isLeaveWithoutCheckchanges = true;
                let searchResults = res.SearchLine == null ? res.ChooseLine : res.SearchLine;
                if (searchResults != null && Object.keys(searchResults).length > 0)
                {
                    this.nav.push(
                        SearchPage,
                        {
                            searchObj: res,
                            column: column,
                            value: value,
                            form: this.form
                        }
                    );
                }

            },
            reason => { });
    }

    // ****************** Row Functions ***************************

    /**Saves current row */
    saveRow = (afterSaveFunc = null) =>
    {
        this.isShowWaitingDots = true;
        this.formService.saveRow(this.form, this.rowInd, 0).then(
            () =>
            {
                this.isShowWaitingDots = false;
                if (afterSaveFunc != null)
                {
                    afterSaveFunc();
                }
                else
                {
                    this.leavePage();
                }

            },
            () =>
            {
                this.isShowWaitingDots = false;
            });
    }
    /** Undoes changes in current row */
    undoRow = (isAfterCheckChanges = false, afterUndoFunc = null) =>
    {
        this.isShowWaitingDots = true;
        this.formService.undoRow(this.form).then(
            result =>
            {
                this.isShowWaitingDots = false;
                this.setIsChangesSaved(true);
                if (afterUndoFunc != null)
                {
                    afterUndoFunc();
                }
                else
                {
                    if (isAfterCheckChanges || this.selectedItem.isNewRow)
                    {
                        this.leavePage();
                    }
                }
            },
            () =>
            {
                this.isShowWaitingDots = false;
            });
    }
    /** Deletes current row */
    deleteRow()
    {

        let delFunc = () =>
        {
            this.isShowWaitingDots = true;
            this.formService.deleteRow(this.form).then(
                res =>
                {
                    this.isShowWaitingDots = false;
                    this.leavePage();
                },
                () =>
                {
                    this.isShowWaitingDots = false;
                });
        };
        this.messageHandler.showErrorOrWarning(false, this.strings.isDelete, delFunc);
    }

    // ****************** Direct Activations ***************************

    /**
     * Sets the activations array to fit the MenuPopup 'items' input.
     * The activations themselves are defined in app.service in 'initProcConfig'.
     * @memberof DetailsPage
     */
    setDirectActivations()
    {
        this.activations = Object.keys(this.formConfig.activations).map(
            (key) => 
            {
                let activation = this.formConfig.activations[key];
                let startActivation = () =>
                {
                    this.activationsPopover.dismiss();
                    this.activationsPopover = null;
                    this.startDirectActivation(activation);
                };
                let item: ButtonOptions = {
                    text: activation.title,
                    click: startActivation,
                };
                return item;
            });
    }

    /**
    * Starts a direct activation. If there were any not saved changes - pops up a message that asks the user to decide what to do with those changes 
    * and then starts the direct activation.
    * @param {any} activationName 
    * @memberof DetailsPage
    */
    startDirectActivation(activation: DirectActivation, isShowLoading = true)
    {
        if (!this.getIsChangesSaved())
        {
            this.messageHandler.showChangesNotSaved(
                () =>
                {
                    this.saveRow(() => { this.startDirectActivation(activation, false) })
                },
                () =>
                {
                    this.undoRow(true, () => { this.startDirectActivation(activation, false) })
                });
            return;
        }

        // In case there were some unsaved changes there are other spinners indicating some action is taking place so we don't need the loading.
        if (isShowLoading)
            this.messageHandler.showLoading(this.strings.loadData);
        this.formService.executeDirectActivation(this.form, activation.name, activation.type)
            .then(
            () =>
            {
                this.setIsChangesSaved(true);
                this.messageHandler.hideLoading();
            })
            .catch(() => this.messageHandler.hideLoading());

    }

    /**
     * Opens a direct activations popup. If there were no activations chosen for the current form - sets one item with an appropriate message.
     * @param {any} event 
     * @memberof DetailsPage
     */
    openDirectActivationsMenu = (event) =>
    {
        let items = this.activations;
        if (!this.activations || this.activations.length <= 0)
        {
            items = [{
                text: this.strings.noDirectActivations,
                click: () => { }

            }];
        }

        this.activationsPopover = this.popoverCtrl.create(MenuPopup, { items: items });
        this.activationsPopover.onDidDismiss(() =>
        {
            this.activationsPopover = null;
        })
        this.activationsPopover.present({ ev: event });
    }

}