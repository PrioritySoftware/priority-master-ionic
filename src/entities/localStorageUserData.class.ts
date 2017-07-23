import { ProfileConfig } from "priority-ionic";
export interface LocalStorageUserData {
    jsonUrl : string;
    applist: any;
    userName: string;
    password: string;
    companyName: string;
    groupName: string;
    notShowSaveMessage: boolean;
    profile: ProfileConfig;
}