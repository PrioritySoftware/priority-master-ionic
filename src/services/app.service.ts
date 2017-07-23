import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Device } from '@ionic-native/device';
import { Storage } from '@ionic/storage';
import { Strings } from "../app/app.config";
import { Entity } from "../entities/entity.class";
import { FormConfig } from "../entities/form.class";
import { LocalStorageUserData } from "../entities/localStorageUserData.class";
import { ConfigurationService, FormService, MessagesService, ServerResponse, ServerResponseCode, ProfileConfig, Company, EnvProfile} from 'priority-ionic';

const LocalJsonUrl: string = "assets/js/pridata.json";
const LocalStorageUserData: string = "userdata"
const AppVersion: string = "app_master_2";
const MasterMessagesEname : string = "MASTERMESSAGES";
const MasterMessagesType : string = "C";


@Injectable()
export class AppService
{
    currentApp: any = {};
    entitiesData: Entity[];
    formsConfig: { [key: string]: FormConfig } = {};
    RowsBatchSize: number = 115;
    loginExpired: boolean = false;
    supportCompanySelection: boolean = true;
    userData: LocalStorageUserData = null;
    private jsonCompanyDname : string = "";
    private jsonUrlString : string = "";
    private reason : ServerResponse = {
                            message: '',
                            form: null,
                            fatal: false,
                            code: '',
                            type: ''
                        };

    constructor(private configService: ConfigurationService,
        private formService: FormService,
        private messagesService: MessagesService,
        private storage: Storage,
        private strings: Strings,
        private device: Device,
        private http: Http)
    { }

    // *************************************** JSON ********************************************

    /** Initialization **/
    initApp(jsonUrl: string): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            this.loadJson(jsonUrl).then(
                () =>
                {
                    if (this.userData.userName != null && this.userData.password != null)
                    {
                        this.logIn(this.userData.userName, this.userData.password).then(
                        ()=>
                        {
                        	resolve(true);
                        },
                        (reason : ServerResponse)=>
                        {
                        	resolve(false);
                        })
                        .catch(
						() => resolve(false));
					}
                    else
                    {
                    	resolve(false);
                    }   
                },
                (reason: ServerResponse) =>
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
            this.getLocalUserData().then(
            ()=>
            {
                this.localJsonExists().then(
                (exists) =>
                {
                    resolve(LocalJsonUrl);
                },
                (notexists) =>
                {
                    if (this.userData.jsonUrl)
                    {
                        resolve(this.userData.jsonUrl);
                    }
                    else
                    {
                        this.reason.message = this.strings.failedToLoadJsonError;
                        reject(this.reason);
                    }
                }); 
            });
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
                        this.readJson(request.responseText, jsonUrl).then(
                            () =>
                            {
                                resolve();
                            },
                            () =>
                            {
                                this.reason.message =  this.strings.failedToReadJsonError;
                                reject(this.reason);
                            });
                    }
                    else
                    {
                        this.reason.message =  this.strings.failedToLoadJsonError;
                        reject(this.reason);
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
    readJson(jsonString, jsonUrl): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            try
            {
                let json = JSON.parse(jsonString);
                this.jsonUrlString=json.url;
                this.checkUrl(json.url).then(
                    (url) =>
                    {
                        this.jsonCompanyDname = json.dname;
                        if(this.userData.companyName === null) //First time or in selecting apps without support for companies selection
                        {
                            this.userData.profile.company = json.dname;
                        }   
                        let config = {
                            appname: json.appname,
                            url: url,
                            profileConfig: this.userData.profile,
                            language: json.lang,
                            tabulaini: json.tabulaini,
                            devicename: this.device.uuid
                        }
                        this.configService.config(config);
                        this.setApp(json.appdes, jsonUrl);
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

                            this.strings.setRtlConstants();
                            this.strings.setFirstRtlConstants();
                        }
                        else
                        {
                            this.strings.setLtrConstants();
                            this.strings.setFirstLtrConstants();
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

    /** Set json url in local storage */
    setJsonUrl(jsonUrl: string)
    {
        this.userData.jsonUrl = jsonUrl;
        this.setLocalUserData();
    }

    // ********************************* Forms Config **************************************

    /** Returns a formConfig object according to the supplied form (in json format) */
    prepareForm(form: Entity): FormConfig
    {
        let formConfig: FormConfig = {
            name: form.name,
            searchColumns: [],
            subforms: [],
            listColumnsOptions: {},
            detailsColumnsOptions: {},
            parentForm: form.fatname,
            pos: form.pos,
            activations: {}
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
            if (column.special == 'B' || column.barcode == 1)// backward compatibility for barcode
            {
                formConfig.detailsColumnsOptions[column.name].subtype = "barcode";
            }
            if (column.special == 'P')
            {
                formConfig.detailsColumnsOptions[column.name].subtype = "phone";
            }
            //Treatment searching by date currently not supported will be treated as part of the development of filters
            if (column.searchfield == 1 && column.type !== "DATE" && column.type !== "TIME")
            {
                formConfig.searchColumns.push(column.name);
            }
        }
        return formConfig;
    }

    /** Iterates on the form entities in json and initializes the formsConfig object. */
    initFormsConfig(entities)
    {
        let procedures = [];
        let parentForms = {};
        //loop on entities and add the parent forms to the parentForms object
        for (let ind in entities)
        {
            let entity = entities[ind];
            if (entity.type == 'F')
            {
                let form = entities[ind];
                let preparedForm = this.prepareForm(form);
                let key = form.name;
                if (!parentForms[form.name])
                    parentForms[form.name] = [];
                if (form.name != form.fatname && form.fatname)
                {
                    key = key + form.fatname;
                    parentForms[form.name].push(form.fatname);
                }
                else
                {
                    parentForms[form.name].push("");
                }
                this.formsConfig[key] = preparedForm;
            }
            else
            {
                procedures.push(entity);
            }
        }
        this.initSubformsConfig(parentForms);
        this.initProcConfig(parentForms, procedures);
    }

    initSubformsConfig(parentForms)
    {
        //loop on forms config and assign subforms to parents
        for (let key in this.formsConfig)
        {
            let formConfig = this.formsConfig[key];
            if (formConfig.parentForm !== formConfig.name && formConfig.parentForm !== undefined)
            {
                if (!parentForms[formConfig.parentForm])
                    continue;
                for (let grandParentName of parentForms[formConfig.parentForm])
                {
                    let parentName = formConfig.parentForm + grandParentName;
                    let parentForm = this.formsConfig[parentName];
                    if (parentForm !== undefined)
                    {
                        parentForm.subforms.push(formConfig.name);
                    }
                }
            }
        }
    }

    initProcConfig(parentForms, procedures: Entity[])
    {
        //sorts the procedures array so that procedures that have lower position will be first.
        procedures = procedures.sort((ent1, ent2) => ent1.pos - ent2.pos);

        //loops over all procedures to determine which of them is a direct activation of one of the forms in formsConfig.
        for (let proc of procedures)
        {
            if (!parentForms[proc.fatname])
                continue;
            for (let grandParentName of parentForms[proc.fatname])
            {
                let parentName = proc.fatname + grandParentName;
                let parentForm = this.formsConfig[parentName];
                if (parentForm !== undefined)
                {
                    parentForm.activations[proc.name] =
                        {
                            title: proc.title,
                            type: proc.type,
                            name: proc.name
                        };
                }
            }
        }
    }

    /** Returns the formConfig object according to the form name and parent form name */
    getFormConfig(form, parentForm)
    {
        let key = form.name;
        if (parentForm)
        {
            key = key + parentForm.name;
        }
        return this.formsConfig[key];
    }


    // ********************************* Apps **************************************

    setApp(appTitle: string, jsonUrl: string)
    {
        let app;
        for (var ind in this.userData.applist)
        {
            if (this.userData.applist[ind].jsonUrl == jsonUrl)
            {
                app = this.userData.applist[ind];
                this.userData.applist[ind].title = appTitle;
            }
        }
        if (app === undefined)//if this app does not exist in apps list add it to the list
        {
            app = {
                title: appTitle,
                jsonUrl: jsonUrl
            }
            this.userData.applist.push(app);
        }
        this.currentApp = app;
    }

    clearCurrentApp()
    {
        this.userData.jsonUrl = null;
        this.setLocalUserData();
    }

    deleteApp(app)
    {
        var index = this.userData.applist.indexOf(app);
        this.userData.applist.splice(index, 1);
        this.setLocalUserData();
    }

    // ********************************* Login **************************************

    // /** Clear the values of username and password saved in local storage */
    clearLogin()
    {
        this.loginExpired = false;
        this.userData.userName = null;
        this.userData.password = null;
        this.setLocalUserData();
    }

    logIn(username: string, password: string): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            this.configService.logIn(username, password).then(
                () =>
                {
                    //save username and password in local storage
                    this.userData.userName = username;
                    this.userData.password = password;
                    this.messagesService.setMessages(MasterMessagesEname, MasterMessagesType, 1, 1000);
                    if(this.supportCompanySelection)
                    {
                        this.getCompanies().then(
                            (companies : Company[])=>
                            {
                                if(companies)
                                {
                                    this.setProfile(companies);
                                    this.setLocalUserData();
                                    resolve();
                                }
                                else
                                {
                                    this.reason.message = this.messagesService.getMessage(MasterMessagesEname, MasterMessagesType, 3);
                                    reject(this.reason);
                                }
                                
                            },
                            (reason)=>
                            {
                                this.setLocalUserData();
                                resolve();
                            }
                        );
                    }
                    else
                    {
                        this.setLocalUserData();
                        resolve();   
                    }
                },
                (reason: ServerResponse) =>
                {
                    this.loginExpired = (reason.code === ServerResponseCode.LoginExpired);
                    reject(reason);
                });
        });
    }

    changePassword(newPwd, confirmNewPwd, oldPwd): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            this.configService.changePassword(newPwd, confirmNewPwd, oldPwd).then(
                (res : string) =>
                {
                    resolve(res);
                },
                (reason : ServerResponse) =>
                {
                    reject(reason);
                });
        });
    }


    /********* Profiles  **********************/
    setProfileConfig(profile: ProfileConfig,  companyName : string, groupName: string)
    {
        this.configService.setProfileConfiguration(profile);
        this.userData.profile = profile;
        this.userData.companyName = companyName;
        this.userData.groupName = groupName;
        this.setLocalUserData();
    }

    getCompanies() : Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            this.configService.getCompanies()
                .then(
                    (companies : Company[])=>
                    {
                        resolve(companies);
                    },
                    (reason : ServerResponse)=>
                    {
                        if(reason.code === ServerResponseCode.NotSupport )
                        {
                            this.supportCompanySelection = false;
                        }
                        reject(reason);
                    }
                ).catch((reason)=>{reject(reason)});
        });
    }

    setProfile(companies : Company[])
    {
        let storageCompany : string = this.userData.profile.company;
        let storageGroup : number = this.userData.profile.group;
        this.userData.companyName = null;
        this.userData.groupName = null;
        this.userData.profile.company = this.jsonCompanyDname;
        this.userData.profile.group = 0;
        let company : Company = null;
        let companyFilter : Company[] = companies.filter(comp=> comp.dname === storageCompany);
        if(companyFilter.length)
        {
            company = companyFilter[0];
        }
        else //company in storage isn't in companues list 
        {
            companyFilter = companies.filter(comp=> comp.dname === this.jsonCompanyDname);
            if(companyFilter.length)
            {
                company = companyFilter[0];
            }
        }
        if(company) 
        {
            this.userData.profile.company = company.dname; 
            this.userData.companyName = company.title;

            //profiles
            if(company.EnvProfile)
            {
                let envProfile : EnvProfile = null;
                if(storageGroup > 0)
                {
                    let envProfileFilter : EnvProfile[];
                    envProfileFilter = company.EnvProfile.filter(prof=> prof.profile === storageGroup);
                    if(envProfileFilter.length)
                    {
                        envProfile = envProfileFilter[0];
                    }
                }

                if(!envProfile)
                {
                    envProfile = company.EnvProfile[0];
                }

                this.userData.profile.group = envProfile.profile;
                this.userData.groupName = envProfile.profilename;
            }
        }
    }

    getLocalUserData(): Promise<any>
    {
        return new Promise((resolve, reject)=>{
            
            if(this.userData)
            {
                resolve();
                return;
            }
            
            this.userData = {
                jsonUrl: null,
                applist: [],
                userName: null,
                password: null,
                companyName: null,
                groupName: null,
                notShowSaveMessage: false,
                profile: {company: null, group: 0 }
            };
            
            this.storage.get(LocalStorageUserData)
                .then((storageData: LocalStorageUserData)=>
                {
                    if(storageData)
                    {    
                        this.userData = storageData;
                    }
                    resolve();
                })
                .catch(()=>
                {
                    resolve();
                });
        });
    }

    setLocalUserData()
    {
        this.storage.set(LocalStorageUserData, this.userData);
    }

    setLocalUserPreferenceShowSaveMessage(value: boolean)
    {
        this.userData.notShowSaveMessage = value;
        this.setLocalUserData();
    }

    /*  Monitor server */
    contactMonitorServer(action: string, form: string)
    {
        let url: string = "https://monitor.priority-software.com/monitor/b.aspx"
            + "?u=" + encodeURI(this.userData.userName)
            + "&t=" + encodeURI(action)
            + "&f=" + encodeURI(form)
            + "&d=" + ""
            + "&e=" + ""
            + "&f=" + ""
            + "&c=" + ""
            + "&s=" + ""
            + "&m=" + ""
            + "&v=" + encodeURI(AppVersion);

        this.http.get(encodeURI(url)).subscribe();
    }
    /*************************** Passwords **********************/

/**
 * Returns a link to a page where he user can restore his password.
 * 
 * @returns 
 * @memberof AppService
 */
getForgotPasswordURL()
{
    let configuration=this.configService.configuration;
    return this.jsonUrlString+"/priority/prihtml.dll?WWWCHPWD&_tabulaini="+configuration.tabulaini;
}

}