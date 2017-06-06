import { ColumnOptions } from "priority-ionic";
import { DirectActivation } from './direct-activation.class';
export declare class FormConfig
{
	name: string;
	subforms: Array<string>
	parentForm: string;
	searchColumns: Array<string>;
	detailsColumnsOptions: { [key: string]: ColumnOptions };
	listColumnsOptions: { [key: string]: ColumnOptions };
	pos;
	activations: { [key: string]: DirectActivation };
}