import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

@Injectable()
export class Strings
{
    deviceLang: string;

    /** First Launch */
    scanInstructions: string;
    scanButton: string;
    scanError: string;
    preparingApp: string;
    failedToReadJsonError: string;
    failedToLoadJsonError: string;
    scanNewConfigurationFile: string;

    /** Menu */
    menuTitle: string;
    logout: string;
    switchApp: string;
    newApp: string;
    terms: string;
    termsURL: string;
    policy: string;
    policyURL: string;

    /** Text */
    wait: string;
    usrTitle: string;
    pswTitle: string;
    errors: string;
    fatalErrorMsg: string;
    warningTitle: string;
    errorTitle: string;
    changesSavedText: string;
    changesNotSavedText: string;
    cannotGoToSubForm: string;
    saveBeforeAttach: string;
    loadData: string;
    appSubTitle: string;
    isDelete: string;
    isExitApp: string;
    loadingFile: string;
    maxLengthForField: string;
    search: string;
    searchError: string;
    scrollLoadingText: string;
    cameraError: string;
    directActivationsTitle: string;
    noDirectActivations: string;
    loadingSearchResults: string;


    /**Buttons text */
    loginBtn: string;
    loginHeader: string;
    ok: string;
    cancel: string;
    defaultMsgTitle: string;
    editBtnText: string;
    deleteBtnText: string;
    deleteRowText: string;
    addNewBtnText: string;
    saveBtnText: string;
    saveAndCont: string;
    cancelAndCont: string;
    addAttach: string;
    openBtnText: string;
    changeBtnText: string;
    textPlaceholder: string;
    approveReadOnly: string;
    approveEditText: string;
    camera: string;
    files: string;
    photoGalery: string;
    showAllItems: string;
    /**Style  */
    dirByLang: string;
    sideByLang: string;
    dirOpposite: string;

    /** Validation errors */
    decimalValidErr: string;
    numberValidErr: string;
    lengthValidErr: string;

    constructor(platform: Platform)
    {

        this.policy = "Privacy policy";
        this.policyURL = "https://s3.priority-software.com/terms/master_privacy_policy.pdf";
        if (platform.is("ios"))
            this.termsURL = "https://s3.priority-software.com/terms/master_termsofuse_appstore.pdf";
        else
            this.termsURL = "https://s3.priority-software.com/terms/master_termsofuse_googleplay.pdf";
    }
    setFirstRtlConstants()
    {
        this.scanInstructions = "סרוק את הקוד QR כדי להתחיל";
        this.scanButton = "סרוק";
        this.scanError = "היתה בעיה עם סריקת הברקוד, נסו שוב";
        this.preparingApp = "מכין עבורך את האפליקציה, אנא המתן";
        this.failedToReadJsonError = "קובץ קונפיגורציה לא תקין.";
        this.failedToLoadJsonError = "נכשל בטעינת קובץ קונפיגורציה.";
        this.scanNewConfigurationFile = " \nפנה למנהל המערכת או סרוק קוד QR חדש";
        this.dirByLang = "rtl";
        this.newApp = "הוסף יישומון";
        this.defaultMsgTitle = "הודעה";
        this.isDelete = "מחיקה?";
        this.deleteBtnText = "מחק";

        this.ok = "אישור";
        this.cancel = "ביטול";
    }

    setRtlConstants() 
    {
        this.menuTitle = "תפריט";
        this.logout = "התנתק";
        this.switchApp = "החלף יישומון";
        this.newApp = "הוסף יישומון";
        this.terms = "תנאי שימוש";

        this.usrTitle = "שם משתמש";
        this.pswTitle = "סיסמא";
        this.wait = "אנא המתן...";
        this.errors = 'דו"ח שגיאות';
        this.fatalErrorMsg = "ארעה תקלה אנא פנה למנהל המערכת: \n";
        this.warningTitle = "אזהרה";
        this.errorTitle = "שגיאה";
        this.changesSavedText = "הנתונים נשמרו בהצלחה!";
        this.changesNotSavedText = "ישנם שינויים שלא נשמרו. להמשיך?";
        this.cannotGoToSubForm = "לא ניתן לבצע את הפעולה.אנא הכנס נתונים תחילה.";
        this.saveBeforeAttach = "ישנם שינויים שלא נשמרו. אנא שמור את הדיווח לפני צרוף נספחים.";
        this.loadData = "טוען נתונים...";
        this.appSubTitle = "מערכת נוכחות";
        this.isDelete = "מחיקה?";
        this.isExitApp = "האם אתה בטוח שברצונך לצאת מהמערכת?";
        this.maxLengthForField = 'מספר התוים המקסימלי עבור השדה הוא: ';
        this.search = "חפש";
        this.scrollLoadingText = "טוען רשומות";
        this.cameraError = "פתיחת מצלמה נכשלה";
        this.showAllItems = "הצג את כל הרשומות";
        this.directActivationsTitle = "הפעלות ישירות";
        this.noDirectActivations = "לא נבחרו הפעלות";
        this.loadingSearchResults = "טוען נתונים נוספים";

        this.loginBtn = "היכנס";
        this.loginHeader = "כניסה למערכת";
        this.ok = "אישור";
        this.cancel = "ביטול";
        this.defaultMsgTitle = "הודעה";
        this.editBtnText = "ערוך";
        this.deleteBtnText = "מחק";
        this.deleteRowText = "מחק רשומה";
        this.addNewBtnText = "חדש";
        this.saveBtnText = "שמור";
        this.saveAndCont = "שמור והמשך";
        this.cancelAndCont = "המשך ללא שמירה";
        this.addAttach = "נספח חדש";
        this.loadingFile = "מעלה את הקובץ...";
        this.openBtnText = "פתח";
        this.changeBtnText = "שנה";
        this.searchError = "לא הוגדרו שדות חיפוש";
        this.camera = "מצלמה";
        this.files = "קבצים";
        this.photoGalery = "גלריית תמונות";


        this.textPlaceholder = "הכנס טקסט";
        this.approveReadOnly = "קריאה בלבד";
        this.approveEditText = "עריכה";
        this.dirByLang = "rtl";
        this.dirOpposite = "ltr";
        this.sideByLang = "right";

        this.decimalValidErr = "דיוק עשרוני שגוי";
        this.numberValidErr = "הכנס ספרות בלבד";
        this.lengthValidErr = 'מספר תוים מקסימלי עבור השדה הוא: ';
    }

    setFirstLtrConstants()
    {
        this.scanInstructions = "Scan your QR code to get started";
        this.scanButton = "Scan";
        this.scanError = "QR code scan failed. Try again";
        this.preparingApp = "Preparing your app. Please wait";
        this.failedToReadJsonError = "Invalid configuration file";
        this.failedToLoadJsonError = "There was a problem loading the configuration file. \n Check your Wi-Fi connection.";
        this.scanNewConfigurationFile = " \nContact your system administrator or scan a new QR code";

        this.dirByLang = "ltr";
        this.defaultMsgTitle = "Message";
        this.ok = "OK";
        this.cancel = "Cancel";
        this.newApp = "New app";
        this.isDelete = "Delete?";
        this.deleteBtnText = "Delete";
    }

    setLtrConstants()
    {
        this.menuTitle = "Menu";
        this.logout = "Logout";
        this.switchApp = "Switch app";
        this.newApp = "New app";
        this.terms = "Terms of use";

        this.usrTitle = "User name";
        this.pswTitle = "Password";
        this.wait = "Please wait...";
        this.errors = "Error report";
        this.fatalErrorMsg = "An error Occurred. Please contact your system administrator.";
        this.warningTitle = "Warning";
        this.errorTitle = "Error";
        this.changesSavedText = "Your change were successfully saved!";
        this.changesNotSavedText = "Some changes were not saved. Continue?";
        this.cannotGoToSubForm = "The operation could not be executed. Please enter data first.";
        this.saveBeforeAttach = "Some changes were not saved. Please save the report before adding an attachment.";
        this.loadData = "Loading data...";
        this.appSubTitle = "Attendance App";
        this.isDelete = "Delete?";
        this.isExitApp = "Are you sure you want to exit the application?";
        this.loadingFile = "Uploading the file...";
        this.maxLengthForField = 'Maximum length for this field is: ';
        this.search = " Search";
        this.searchError = "No search fields defined"
        this.scrollLoadingText = "Loading more data";
        this.cameraError = "Failed to open camera";
        this.showAllItems = "Show all items";
        this.directActivationsTitle = "Direct Activations";
        this.noDirectActivations = "No activations were chosen";
        this.loadingSearchResults = "Loading more data";

        this.loginBtn = "Login";
        this.loginHeader = "";
        this.ok = "OK";
        this.cancel = "Cancel";
        this.defaultMsgTitle = "Message";
        this.editBtnText = "Edit";
        this.deleteBtnText = "Delete";
        this.deleteRowText = "Delete Record";
        this.addNewBtnText = "Add new";
        this.saveBtnText = "Save";
        this.saveAndCont = "Save and continue";
        this.cancelAndCont = "Continue without saving";
        this.addAttach = "Attach file";
        this.openBtnText = "Open";
        this.changeBtnText = "Change";
        this.camera = "Camera";
        this.files = "Files";
        this.photoGalery = "Photo Galery";

        this.textPlaceholder = "Enter text";
        this.approveReadOnly = "Read only";
        this.approveEditText = "Edit";
        this.dirByLang = "ltr";
        this.dirOpposite = "rtl";
        this.sideByLang = "left";

        this.decimalValidErr = "Wrong decimal precision";
        this.numberValidErr = "Digits only";
        this.lengthValidErr = "Maximum length for field is: ";
    }
}



