import { CustomColumn } from "./column.class";
import { Form } from "priority-ionic";
export declare class CustomForm extends Form
{
	columns: {[key:string]: CustomColumn};
	subforms:{[key:string]: Form};
	parentForm: Form;
	detailsColumnsOptions;
	listColumnsOptions;
}