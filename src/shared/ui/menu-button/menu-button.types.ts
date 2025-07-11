import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface IMenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string;
	iconLeft?: ReactNode;
	iconRight?: ReactNode;
    enabled?: boolean
}