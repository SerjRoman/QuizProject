import type { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

export interface IInput
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	iconLeft?: ReactNode;
	iconRight?: ReactNode;
	label?: string;
    labelClassName?: string
}
