import { ColumnOptions } from "priority-ionic";
export declare class FormConfig {
	name: string;
	subforms: Array<string>
	parentForm: string;
	searchColumns: Array<string>;
	detailsColumnsOptions: {[key:string]: ColumnOptions};
	listColumnsOptions: {[key:string]: ColumnOptions};
}