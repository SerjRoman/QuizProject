import type { HTMLAttributes, ReactNode } from "react";

export interface IDropdownRenderProp {
	isOpen: boolean;
	open: () => void;
	close: () => void;
	toggle: () => void;
}
export interface IDropdownProps<T> extends HTMLAttributes<HTMLDivElement> {
	trigger: (props: IDropdownRenderProp) => ReactNode;
	dataSoruce: T[];
	renderItem: (data: T) => ReactNode;
	showOn?: "hover";
}
