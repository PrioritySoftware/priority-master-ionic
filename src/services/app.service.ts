import { Injectable } from '@angular/core';
import { Device } from 'ionic-native';
import { Storage } from '@ionic/storage';
import { Strings } from "../app/app.config";
import { Configuration } from "priority-ionic";
import { Entity } from "../entities/entity.class";
import { CustomForm } from "../entities/form.class";
import { ConfigurationService, FormService, ServerResponse } from 'priority-ionic';

//\\ceshbel\usr1\users\spc\system\library\upgrades\var\mobileApps
//const LocalJsonUrl : string = "https://cdn.priority-software.com/upgrades/var/mobileApps/pridata.json?t="+new Date().getTime();
const LocalJsonUrl: string = "assets/js/pridata.json";
const LocalStorageJsonUrlKey: string = "prijsonurl";
const LocalStorageUsernameKey: string = "priusername";
const LocalStoragePasswordKey: string = "pripassword";


@Injectable()
export class AppService
{
    entitiesData: Entity[];

    constructor(private configService: ConfigurationService, private formService: FormService, private storage: Storage)
    {
        this.entitiesData = [];
    }
    /** Initialization **/
    initApp(jsonUrl: string): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            this.loadJson(jsonUrl).then(
                () =>
                {
                    let username = this.getLocalUsername();
                    let password = this.getLocalPassword();
                    if (username != null && password != null)
                    {
                        this.configService.logIn(username, password).then(
                            () =>
                            {
                                resolve(true);
                            },
                            reason =>
                            {
                                this.clearLogin();
                                resolve(false);
                            })
                    }
                    else
                    {
                        resolve(false);
                    }
                },
                (reason: string) =>
                {
                    reject(reason);
                });

        });
    }

    /* Checks if there is a local json file */
    localJsonExists(): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            var request = new XMLHttpRequest();
            request.onreadystatechange = () =>
            {
                if (request.readyState === 4)
                {
                    if (request.status === 200)
                    {
                        resolve();
                    }
                    else
                    {
                        reject();
                    }
                }
            };
            request.open('HEAD', LocalJsonUrl, false);
            request.send();
        });
    }
    /* Retrives the json url from local storage */
    jsonUrl(): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            this.localJsonExists().then(
                exists =>
                {
                    resolve(LocalJsonUrl);
                },
                notexists =>
                {
                    this.storage.get(LocalStorageJsonUrlKey).then(
                        (jsonUrl) =>
                        {
                            if (jsonUrl != null)
                            {
                                resolve(jsonUrl);
                            }
                            else
                            {
                                reject(Strings.failedToLoadJsonError);
                            }
                        },
                        error =>
                        {
                            reject(Strings.failedToLoadJsonError);
                        });
                })
        });
    }
    /** Loads the json file from the url */
    loadJson(jsonUrl: string): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            var request = new XMLHttpRequest();
            request.onreadystatechange = () =>
            {
                if (request.readyState === 4)
                {
                    if (request.status === 200)
                    {
                        try
                        {
                            this.readJson(request.responseText).then(
                                () =>
                                {
                                    resolve();
                                },
                                () =>
                                {
                                    reject(Strings.failedToReadJsonError);
                                });
                        }
                        catch (err)
                        {
                            reject(Strings.failedToReadJsonError);
                        }
                    }
                    else
                    {
                        reject(Strings.failedToLoadJsonError);
                    }
                }
            };
            request.open("GET", jsonUrl, true);
            request.send(null);
        });
    }

    //We need to check the url to wcf service provided by the json
    //Because sometimes there are extra subfolders in the url
    //So we try to connect and if fails - we remove a subfolder, until connetion is ok.
    checkUrl(serverUrl: string): Promise<string>
    {
        return new Promise((resolve, reject) =>
        {
            var request = new XMLHttpRequest();
            request.onreadystatechange = () =>
            {
                if (request.readyState === 4)
                {
                    if (request.status === 400)
                    {
                        resolve(serverUrl);
                    }
                    else
                    {
                        if (serverUrl.match(/\/(\w|\d)+$/) != null)//there is a subfolder to remove
                        {
                            let url = serverUrl.replace(/\/(\w|\d)+$/, '');//remove it and check again
                            this.checkUrl(url).then((url) => { resolve(url); }, () => { reject(); });
                        }
                        else
                        {
                            reject();
                        }
                    }
                }
            };
            request.open('HEAD', serverUrl + '/wcf/wcf/service.svc', false);
            request.send();
        });
    }
    /** Reads the json file and sets the configuration settings and entities */
    readJson(jsonString): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            let json = JSON.parse(jsonString);
            this.checkUrl(json.url).then(
                (url) =>
                {
                    let config = {
                        appname: json.appname,
                        url: url,
                        company: json.dname,
                        language: json.lang,
                        tabulaini: json.tabulaini,
                        devicename: Device.uuid
                    }
                    this.configService.config(config);
                    this.entitiesData = json.forms_data;
                    this.initForms(this.entitiesData);
                    if (config.language == 1)
                    {
                        Strings.setRtlConstants();
                    }
                    else
                    {
                        Strings.setLtrConstants();
                    }
                    resolve();
                },
                () =>
                {
                    reject();
                });
        });
    }

    initForms(entities)
    {
        let forms = {};
        //loop on entities and add the forms to the forms object
        for (var ind in entities)
        {
            if (entities[ind].type == 'F')
            {
                let form: CustomForm = entities[ind];
                //format the columns to object instead of array
                let listColumnsOptions = {};
                let detailsColumnsOptions = {};
                for (var ind in form.columns)
                {
                    let column = form.columns[ind];
                    if (column.tabview == 1)
                    {
                        listColumnsOptions[column.name]={};
                        listColumnsOptions[column.name].isShow = true;
                        listColumnsOptions[column.name].isShowTitle = true;
                    }
                    if (column.lineview == 1)
                    {
                        detailsColumnsOptions[column.name]={};
                        detailsColumnsOptions[column.name].isShow = true;
                        detailsColumnsOptions[column.name].isShowTitle = true;
                    }
                    if(column.barcode==1)
                    {
                        detailsColumnsOptions[column.name].subtype="barcode";
                    }
                }
                form.listColumnsOptions = listColumnsOptions;

                form.detailsColumnsOptions=detailsColumnsOptions;
                //init the form rows to an empty object
                form.rows = {};
                //init the subforms to an empty object
                form.subforms = {};
                //add the form to the forms object
                forms[form.name] = form;
            }
        }

        //loop on forms and assign parent and subforms
        for (var formname in forms)
        {
            let form = forms[formname];
            //if the form is a subform
            //assign it's parent form
            //and add it to the parent's form subform list
            if (form.fatname !== form.name && form.fatname !== undefined)
            {
                let parentform = forms[form.fatname];
                form.parentForm = parentform;
                parentform.subforms[formname] = form;
            }
        }

        this.formService.initForms(forms);
    }
    /** Set json url in local storage */
    setJsonUrl(jsonUrl: string)
    {
        this.storage.set(LocalStorageJsonUrlKey, jsonUrl);
    }
    /** Returns the username value saved in local storage */
    getLocalUsername()
    {
        return window.localStorage.getItem(LocalStorageUsernameKey);
    }
    /** Returns the password value save in local storage */
    getLocalPassword()
    {
        return window.localStorage.getItem(LocalStoragePasswordKey);
    }
    // /** Clear the values of username and password saved in local storage */
    clearLogin()
    {
        window.localStorage.removeItem(LocalStorageUsernameKey);
        window.localStorage.removeItem(LocalStoragePasswordKey);
    }

    logIn(username, password): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            this.configService.logIn(username, password).then(
                () =>
                {
                    //save username and password in local storage
                    window.localStorage.setItem(LocalStorageUsernameKey, username);
                    window.localStorage.setItem(LocalStoragePasswordKey, password);
                    resolve();
                },
                (reason: ServerResponse) =>
                {
                    reject(reason);
                });
        });
    }

}