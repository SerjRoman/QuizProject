import type { HTMLAttributes } from "react";

export interface IRadioProps
	extends Omit<HTMLAttributes<HTMLInputElement>, "type"> {
	label?: string;
	value: string;
}
