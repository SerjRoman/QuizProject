import { useRef } from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "@/shared/lib";
import styles from "./modal-component.module.css";
import type { ModalComponentProps } from "./modal-component.types";

export function ModalComponent(props: ModalComponentProps) {
	const {
		isOpen,
		onClose,
		children,
		className,
		doCloseOnClickOutside = false,
		container,
	} = props;

	const contentRef = useRef<HTMLDivElement | null>(null);

	useClickOutside(contentRef, () => {
		if (doCloseOnClickOutside) onClose();
	});
	if (!isOpen) return null;
	return createPortal(
		<div className={styles.overlay}>
			<div className={className} ref={contentRef}>
				{children}
			</div>
		</div>,
		container ? container : document.body
	);
}
