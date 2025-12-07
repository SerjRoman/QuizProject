import type { HTMLProps, ReactNode } from "react";

export interface ChipProps extends HTMLProps<HTMLSpanElement> {
	variant?: "green" | "pink" | "blue" | "default";
	labelNode?: ReactNode;
}
