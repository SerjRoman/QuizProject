import type { ReactNode } from "react";

export interface ModalComponentProps {
	children?: ReactNode;
	isOpen: boolean;
	onClose: () => void;
	doCloseOnClickOutside?: boolean;
	className?: string
}
