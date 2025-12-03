import type { ModalComponentProps } from "@/shared/ui";

export type CustomModalProps<T> = ModalComponentProps & {
	isOpen: boolean;
	onClose: () => void;
} & T;
