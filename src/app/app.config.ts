
export class Strings
{
    public static lang: string;

    /** First Launch */
    public static scanInstructions: string;
    public static scanButton: string;
    public static scanError: string;
    public static preparingApp: string;
    public static failedToReadJsonError: string;
    public static failedToLoadJsonError: string;
    public static scanNewConfigurationFile: string;

    /** Text */
    public static wait: string;
    public static usrTitle: string;
    public static pswTitle: string;
    public static errors: string;
    public static fatalErrorMsg: string;
    public static warningTitle: string;
    public static errorTitle: string;
    public static changesSavedText: string;
    public static changesNotSavedText: string;
    public static cannotGoToSubForm: string;
    public static saveBeforeAttach: string;
    public static loadData: string;
    public static appSubTitle: string;
    public static isDelete: string;
    public static isExitApp: string;
    public static loadingFile: string;
    public static maxLengthForField: string;
    public static search: string;
    public static searchError: string;
    public static scrollLoadingText: string;
    public static cameraError: string;

    /**Buttons text */
    public static loginBtn: string;
    public static loginHeader: string;
    public static ok: string;
    public static cancel: string;
    public static defaultMsgTitle: string;
    public static editBtnText: string;
    public static deleteBtnText: string;
    public static addNewBtnText: string;
    public static saveBtnText: string;
    public static saveAndCont: string;
    public static cancelAndCont: string;
    public static addAttach: string;
    public static openBtnText: string;
    public static changeBtnText: string;
    public static textPlaceholder: string;
    public static approveReadOnly: string;
    public static approveEditText: string;
    public static camera: string;
    public static files: string;
    public static photoGalery: string;
    public static showAllItems: string;
    /**Style  */
    public static dirByLang: string;
    public static dirOpposite: string;

    /** Validation errors */
    public static decimalValidErr: string;
    public static numberValidErr: string;
    public static lengthValidErr: string;

    public static setFirstRtlConstants()
    {
        Strings.scanInstructions = "סרוק את הקוד QR כדי להתחיל";
        Strings.scanButton = "סרוק";
        Strings.scanError = "היתה בעיה עם סריקת הברקוד, נסו שוב";
        Strings.preparingApp = "מכין עבורך את האפליקציה, אנא המתן";
        Strings.failedToReadJsonError = "קובץ קונפיגורציה לא תקין.";
        Strings.failedToLoadJsonError = "נכשל בטעינת קובץ קונפיגורציה.";
        Strings.scanNewConfigurationFile = " \nפנה למנהל המערכת או סרוק קוד QR חדש";
        Strings.dirByLang = "rtl";

        Strings.ok = "אישור";
        Strings.cancel = "ביטול";
    }

    public static setRtlConstants() 
    {
        Strings.usrTitle = "שם משתמש";
        Strings.pswTitle = "סיסמא";
        Strings.wait = "אנא המתן...";
        Strings.errors = 'דו"ח שגיאות';
        Strings.fatalErrorMsg = "ארעה תקלה אנא פנה למנהל המערכת: \n";
        Strings.warningTitle = "אזהרה";
        Strings.errorTitle = "שגיאה";
        Strings.changesSavedText = "הנתונים נשמרו בהצלחה!";
        Strings.changesNotSavedText = "ישם שינויים שלא נשמרו. להמשיך?";
        Strings.cannotGoToSubForm = "לא ניתן לבצע את הפעולה.אנא הכנס נתונים תחילה.";
        Strings.saveBeforeAttach = "ישנם שינויים שלא נשמרו. אנא שמור את הדיווח לפני צרוף נספחים.";
        Strings.loadData = "טוען נתונים...";
        Strings.appSubTitle = "מערכת נוכחות";
        Strings.isDelete = "מחיקה?";
        Strings.isExitApp = "האם אתה בטוח שברצונך לצאת מהמערכת?";
        Strings.maxLengthForField = 'מספר התוים המקסימלי עבור השדה הוא: ';
        Strings.search = "חפש";
        Strings.scrollLoadingText = "טוען רשומות...";
        Strings.cameraError = "פתיחת מצלמה נכשלה";
        Strings.showAllItems = "הצג את כל הרשומות";

        Strings.loginBtn = "היכנס";
        Strings.loginHeader ="כניסה למערכת";
        Strings.ok = "אישור";
        Strings.cancel = "ביטול";
        Strings.defaultMsgTitle = "הודעה";
        Strings.editBtnText = "ערוך";
        Strings.deleteBtnText = "מחק";
        Strings.addNewBtnText = "חדש";
        Strings.saveBtnText = "שמור";
        Strings.saveAndCont = "שמור והמשך";
        Strings.cancelAndCont = "המשך ללא שמירה";
        Strings.addAttach = "נספח חדש";
        Strings.loadingFile = "מעלה את הקובץ...";
        Strings.openBtnText = "פתח";
        Strings.changeBtnText = "שנה";
        Strings.searchError = "לא הוגדרו שדות חיפוש";
        Strings.camera = "מצלמה";
        Strings.files = "קבצים";
        Strings.photoGalery = "גלריית תמונות";

        
        Strings.textPlaceholder = "הכנס טקסט";
        Strings.approveReadOnly = "קריאה בלבד";
        Strings.approveEditText = "עריכה";
        Strings.dirByLang = "rtl";
        Strings.dirOpposite = "ltr";

        Strings.decimalValidErr = "דיוק עשרוני שגוי";
        Strings.numberValidErr = "הכנס ספרות בלבד";
        Strings.lengthValidErr = 'מספר תוים מקסימלי עבור השדה הוא: ';
    }

    public static setFirstLtrConstants()
    {
        Strings.scanInstructions = "Scan your QR code to get started";
        Strings.scanButton = "Scan";
        Strings.scanError = "QR code scan failed. Try again";
        Strings.preparingApp = "Preparing your app. Please wait";
        Strings.failedToReadJsonError = "Invalid configuration file";
        Strings.failedToLoadJsonError = "There was a problem loading the configuration file. \n Check your Wi-Fi connection.";
        Strings.scanNewConfigurationFile = " \nContact your system administrator or scan a new QR code";

        Strings.dirByLang = "ltr";

        Strings.ok = "OK";
        Strings.cancel = "Cancel";
    }

    public static setLtrConstants()
    {
        Strings.usrTitle = "User name";
        Strings.pswTitle = "Password";
        Strings.wait = "Please wait...";
        Strings.errors = "Error report";
        Strings.fatalErrorMsg = "An error Occurred. Please contact your system administrator.";
        Strings.warningTitle = "Warning";
        Strings.errorTitle = "Error";
        Strings.changesSavedText = "Your change were successfully saved!";
        Strings.changesNotSavedText = "Some changes were not saved. Continue?";
        Strings.cannotGoToSubForm = "The operation could not be executed. Please enter data first.";
        Strings.saveBeforeAttach = "Some changes were not saved. Please save the report before adding an attachment.";
        Strings.loadData = "Loading data...";
        Strings.appSubTitle = "Attendance App";
        Strings.isDelete = "Delete?";
        Strings.isExitApp = "Are you sure you want to exit the application?";
        Strings.loadingFile = "Uploading the file...";
        Strings.maxLengthForField = 'Maximum length for this field is: ';
        Strings.search = " Search";
        Strings.searchError = "No search fields defined"
        Strings.scrollLoadingText = "Loading more data...";
        Strings.cameraError = "Failed to open camera";
        Strings.showAllItems = "Show all items";

        Strings.loginBtn = "Login";
        Strings.loginHeader ="";
        Strings.ok = "OK";
        Strings.cancel = "Cancel";
        Strings.defaultMsgTitle = "Message";
        Strings.editBtnText = "Edit";
        Strings.deleteBtnText = "Delete";
        Strings.addNewBtnText = "Add new";
        Strings.saveBtnText = "Save";
        Strings.saveAndCont = "Save and continue";
        Strings.cancelAndCont = "Continue without saving";
        Strings.addAttach = "Attach file";
        Strings.openBtnText ="Open";
        Strings.changeBtnText = "Change";
        Strings.camera = "Camera";
        Strings.files = "Files";
        Strings.photoGalery = "Photo Galery";

        Strings.textPlaceholder = "Enter text";
        Strings.approveReadOnly = "Read only";
        Strings.approveEditText = "Edit";
        Strings.dirByLang = "ltr";
        Strings.dirOpposite = "rtl";

        Strings.decimalValidErr = "Wrong decimal precision";
        Strings.numberValidErr = "Digits only";
        Strings.lengthValidErr = "Maximum length for field is: ";
    }
}



