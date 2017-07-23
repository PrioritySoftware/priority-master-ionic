import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessageHandler, ServerResponse, ProfileConfig, Company, EnvProfile, MessagesService } from 'priority-ionic';
import { AppService } from '../../services/app.service';
import { Strings } from '../../app/app.config';

const MasterMessagesEname : string = "MASTERMESSAGES";
const MasterMessagesType : string = "C";

@Component({
    selector: 'profiles-page',
    templateUrl: 'profiles.view.html',
})
export class ProfilesPage 
{
    pageTitle = this.messagesService.getMessage(MasterMessagesEname, MasterMessagesType, 1);
    companiesList = [];
    envProfileList = [];
    dirByLang;
    companySelected : Company;

    constructor(
        public nav: NavController,
        private appService: AppService,
        private messagesService: MessagesService,
        private messageHandler: MessageHandler,
        private strings: Strings
        )
    {
        this.dirByLang = this.strings.dirByLang;
    }
    
    
    getProfiles()
    {
        this.companiesList= [];
        this.envProfileList = [];
        this.appService.getCompanies().
            then(
                (companies : Company[])=>
                {
                    this.companiesList = companies;
                },
                (reason : ServerResponse)=>
                {
                    this.messageHandler.showToast(reason.message, 3000);
                    this.leavePage();
                }
            );

    }


    selectCompany(company : Company)
    {
        this.companiesList = [];
        this.companySelected = company;
        if(company.EnvProfile && company.EnvProfile.length > 1) 
        {
            this.envProfileList= company.EnvProfile;
            this.pageTitle = this.messagesService.getMessage(MasterMessagesEname, MasterMessagesType, 2);
        }
        else
        {
            let profile : EnvProfile = company.EnvProfile ? company.EnvProfile[0] : null;
            this.selectProfile(profile);
        }
    }

    selectProfile(profile : EnvProfile)
    {
        let profileCunfig : ProfileConfig = {
            company: this.companySelected.dname,
            group: (profile ? profile.profile : 0)
        };
        let groupName : string = profile ? profile.profilename : null;
        this.appService.setProfileConfig(profileCunfig, this.companySelected.title, groupName);
        this.leavePage();
    }

    leavePage()
    {
        this.nav.pop();
    }

    ionViewDidLoad()
    {
        this.getProfiles();
    }


    
}
