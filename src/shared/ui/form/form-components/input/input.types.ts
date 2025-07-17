import type { DetailedHTMLProps, InputHTMLAttributes } from "react";
import type { RegisterOptions } from "react-hook-form";

export interface IFormInput
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	name: string;
	label?: string;
	labelClassName?: string;
	rules?: RegisterOptions;
}
