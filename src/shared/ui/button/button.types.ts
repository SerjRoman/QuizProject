import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface IButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	variant: "red" | "gray";
	title?: string;
}
