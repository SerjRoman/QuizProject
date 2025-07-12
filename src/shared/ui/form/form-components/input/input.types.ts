import type { HTMLAttributes } from "react";

export interface IFormInput extends HTMLAttributes<HTMLInputElement> {
	name: string;
	label?: string;
	labelClassname?: string;
}
