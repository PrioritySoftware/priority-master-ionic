import { Column } from 'priority-ionic';
export interface CustomColumn extends Column
{
    /** Fields name in the form.*/
    name:string;
    /** Is the field defined as a search field. Used for filtering  'getRows' results. 0 or 1*/
    searchfield:number;
    /** Is the field is a key field.  0 or 1*/
    iskey:number;
    /** Should the field be displayed in a list page. 0 or 1 */
    tabview:number;
    /** Should the field be displayed in a ditails page.  0 or 1*/
    lineview:number;
    /** The fields position for sort */
    pos:number;
    /** Is fileds content is a barcode. 0 or 1*/
    barcode:number;
}