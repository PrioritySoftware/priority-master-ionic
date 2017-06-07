import { ColumnsOptions } from "priority-ionic";
import { DirectActivation } from './direct-activation.class';
export declare class FormConfig
{
	name: string;
	subforms: Array<string>
	parentForm: string;
	searchColumns: Array<string>;
	detailsColumnsOptions: ColumnsOptions;
	listColumnsOptions: ColumnsOptions;
	pos: number;
	activations: { [key: string]: DirectActivation };
}