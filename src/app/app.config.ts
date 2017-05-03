
export class Strings
{
    public static lang: string;

    /** First Launch */
    public static header: string;
    public static header2: string;
    public static scanInstructions: string;
    public static scanButton: string;
    public static scanError: string;
    public static preparingApp: string;
    public static storageError: string;
    public static failedToReadJsonError: string;
    public static failedToLoadJsonError: string;

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
    public static btnTitle: string;
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
        Strings.header = "אפליקציית פריוריטי";
        Strings.header2 = "כל הפונקציונליות עכשיו במובייל!";
        Strings.scanInstructions = "סרוק את הקוד QR כדי להתחיל";
        Strings.scanButton = "סרוק";
        Strings.scanError = "היתה בעיה עם סריקת הברקוד, נסו שוב";
        Strings.preparingApp = "מכין עבורך את האפליקציה, אנא המתן";
        Strings.storageError = "בעיה בגישה לנתונים, אנא סרקו את האפליקציה שוב";
        Strings.failedToReadJsonError = "קובץ קונפיגורציה לא תקין.";
        Strings.failedToLoadJsonError = "נכשל בטעינת קובץ קונפיגורציה.";
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


        Strings.btnTitle = "היכנס";
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
        Strings.numberValidErr = "אנא הכנס ספרות בלבד";
        Strings.lengthValidErr = 'מספר תוים מקסימלי עבור השדה הוא: ';
    }

    public static setFirstLtrConstants()
    {
        Strings.header = "Priority App";
        Strings.header2 = "All you need, now in mobile!";
        Strings.scanInstructions = "Scan the QR code to get started";
        Strings.scanButton = "Scan";
        Strings.scanError = "There was a problem with the scanning, please try again";
        Strings.preparingApp = "Preparing your app, please wait";
        Strings.storageError = "Problem with accesing your data, please scan the app agian";
        Strings.failedToReadJsonError = "Invalid configuration file";
        Strings.failedToLoadJsonError = "There was a problem loading configuration file. \n Check your wifi connection.";

        Strings.dirByLang = "ltr";

        Strings.ok = "Ok";
        Strings.cancel = "Cancel";
    }

    public static setLtrConstants()
    {
        Strings.usrTitle = "Username";
        Strings.pswTitle = "Password";
        Strings.wait = "Please wait...";
        Strings.errors = 'Errors Report';
        Strings.fatalErrorMsg = "Error happend.Please try again.";
        Strings.warningTitle = "Warning";
        Strings.errorTitle = "Error";
        Strings.changesSavedText = "Your change were successfuly saved!";
        Strings.changesNotSavedText = "Some changes were not saved. Continue?";
        Strings.cannotGoToSubForm = "The operation could not be executed.Please enter data first.";
        Strings.saveBeforeAttach = "Some changes were not saved.Please save the report before adding an attachment.";
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

        Strings.btnTitle = "OK";
        Strings.ok = "Ok";
        Strings.cancel = "Cancel";
        Strings.defaultMsgTitle = "Message";
        Strings.editBtnText = "Edit";
        Strings.deleteBtnText = "Delete";
        Strings.addNewBtnText = "Add New";
        Strings.saveBtnText = "Save";
        Strings.saveAndCont = "Save and continue";
        Strings.cancelAndCont = "Continue without saving";
        Strings.addAttach = "Attach file";
        Strings.openBtnText ="Open";
        Strings.changeBtnText = "Change";
        Strings.camera = "Camera";
        Strings.files = "Files";
        Strings.photoGalery = "Photo galery";

        Strings.textPlaceholder = "Enter text";
        Strings.approveReadOnly = "Read only";
        Strings.approveEditText = "Edit";
        Strings.dirByLang = "ltr";
        Strings.dirOpposite = "rtl";

        Strings.decimalValidErr = "wrong decimal precision";
        Strings.numberValidErr = "digits only";
        Strings.lengthValidErr = 'max length for field: ';
    }
}



