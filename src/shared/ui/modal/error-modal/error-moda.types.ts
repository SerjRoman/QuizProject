import type { ModalComponentProps } from "../modal-component";

export interface ErrorModalProps extends ModalComponentProps {
	setError?: (value: string | null) => void;
	error?: string | null;
}
