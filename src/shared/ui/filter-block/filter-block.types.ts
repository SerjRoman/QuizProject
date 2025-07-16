import type { ReactNode } from "react";

export interface IFilterBlockProps {
	className?: string;
	children?: ReactNode;
	onShowMore?: () => void;
	title?: string;
	showMoreClassName?: string;
}
