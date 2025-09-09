import { useState, type ReactNode } from "react";
import { useModal } from "./use-modal";

type UseErrorReturnType = {
	ModalError: ReactNode;
	setError: (value: string) => void;
};

export function useError(): UseErrorReturnType {
	const [error, setError] = useState<string | null>(null);
	const [{ close }, Modal] = useModal();

	const ModalError = error ? (
		<Modal>
			<p
				onClick={() => {
					close();
					setError(null);
				}}
			></p>
		</Modal>
	) : null;
	return { ModalError, setError };
}
