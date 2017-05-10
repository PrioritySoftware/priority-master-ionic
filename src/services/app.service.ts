import { Injectable } from '@angular/core';
import { Device } from 'ionic-native';
import { Storage } from '@ionic/storage';
import { Strings } from "../app/app.config";
import { Configuration } from "priority-ionic";
import { Entity } from "../entities/entity.class";
import { FormConfig } from "../entities/form.class";
import { ConfigurationService, FormService, ServerResponse } from 'priority-ionic';

const LocalJsonUrl: string = "assets/js/pridata.json";
const LocalStorageJsonUrlKey: string = "prijsonurl";
const LocalStorageUsernameKey: string = "priusername";
const LocalStoragePasswordKey: string = "pripassword";


@Injectable()
export class AppService
{
    entitiesData: Entity[];
    formsConfig: {[key: string] : FormConfig} = {};

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
                    let username = "";
                    this.getLocalUsername()
                        .then(userName =>
                        {
                            username = userName;
                            return this.getLocalPassword();
                        })
                        .then(password =>
                        {
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
                        })
                        .catch(() => resolve(false));
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
            try
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
                        try
                        {
                            this.entitiesData = json.forms_data;
                            this.initFormsConfig(this.entitiesData);
                        }
                        catch (err)
                        {
                            reject();
                        }
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
            }
            catch (err)
            {
                reject();
            }
        });
    }

    // ********************************* Forms Config **************************************

    /** Returns a formConfig object according to the supplied form (in json format) */
    prepareForm(form: Entity) : FormConfig
    {
        let formConfig: FormConfig = {
            name: form.name,
            searchColumns: [],
            subforms: [],
            listColumnsOptions: {},
            detailsColumnsOptions: {},
            parentForm: form.fatname,
            pos: form.pos
        };

        for (var ind in form.columns)
        {
            let column = form.columns[ind];
            if (column.tabview == 1)
            {
                formConfig.listColumnsOptions[column.name] = {};
                formConfig.listColumnsOptions[column.name].isShow = true;
                formConfig.listColumnsOptions[column.name].isShowTitle = true;
                formConfig.listColumnsOptions[column.name].pos = column.pos;
                
            }
            if (column.lineview == 1)
            {
                formConfig.detailsColumnsOptions[column.name] = {};
                formConfig.detailsColumnsOptions[column.name].isShow = true;
                formConfig.detailsColumnsOptions[column.name].isShowTitle = true;
                formConfig.detailsColumnsOptions[column.name].pos = column.pos;
            }
            if (column.special == 'B')
            {
                formConfig.detailsColumnsOptions[column.name].subtype = "barcode";
            }
            if (column.special == 'P')
            {
                formConfig.detailsColumnsOptions[column.name].subtype = "phone";
            }
            if(column.searchfield == 1)
            {
                formConfig.searchColumns.push(column.name);
            }
        }
        return formConfig;
    }

    /** Iterates on the form entities in json and initializes the formsConfig object. */
    initFormsConfig(entities)
    {
        //loop on entities and add the parent forms to the forms object
        for (var ind in entities)
        {
            if (entities[ind].type == 'F')
            {
                let form: Entity = entities[ind];
                let preparedForm = this.prepareForm(form);
                let key = form.name;
                if(form.name != form.fatname && form.fatname)
                {
                    key = key + form.fatname;
                }
                this.formsConfig[key] = preparedForm;
            }
        }

        //loop on forms config and assign subforms to parents
        for (var key in this.formsConfig)
        {
            let formConfig = this.formsConfig[key];
            if (formConfig.parentForm !== formConfig.name && formConfig.parentForm !== undefined)
            {
                let parentForm = this.formsConfig[formConfig.parentForm];
                if(parentForm !== undefined)
                {
                    parentForm.subforms.push(formConfig.name);
                }
            }
        }
    }

    /** Returns the formConfig object according to the form name and parent form name */
    getFormConfig(form,parentForm) : FormConfig
    {
        let key = form.name;
        if(parentForm)
        {
            key = key + parentForm.name;
        }
        return this.formsConfig[key];
    }

    /** Set json url in local storage */
    setJsonUrl(jsonUrl: string)
    {
        this.storage.set(LocalStorageJsonUrlKey, jsonUrl);
    }
    /** Returns the username value saved in local storage */
    getLocalUsername()
    {
        return this.storage.get(LocalStorageUsernameKey);
    }
    /** Returns the password value save in local storage */
    getLocalPassword()
    {
        return this.storage.get(LocalStoragePasswordKey);
    }
    // /** Clear the values of username and password saved in local storage */
    clearLogin()
    {
        this.storage.remove(LocalStorageUsernameKey);
        this.storage.remove(LocalStoragePasswordKey);
    }

    logIn(username, password): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            this.configService.logIn(username, password).then(
                () =>
                {
                    //save username and password in local storage
                    this.storage.set(LocalStorageUsernameKey, username).then(() =>
                    {
                        return this.storage.set(LocalStoragePasswordKey, password);
                    })
                        .then(() => resolve());
                },
                (reason: ServerResponse) =>
                {
                    reject(reason);
                });
        });
    }

}