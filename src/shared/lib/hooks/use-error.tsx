import { useEffect, useState, type ReactNode } from "react";
import { useModal } from "./use-modal";

type UseErrorReturnType = {
	ModalError: ReactNode;
	setError: (value: string) => void;
	handleError: (statusCode: number | null, customMessage?: string) => void;
};

export function useError(): UseErrorReturnType {
	const [error, setError] = useState<string | null>(null);
	const [{ open, close }, Modal] = useModal();

	const handleError = (statusCode: number | null, customMessage?: string) => {
		if (customMessage) {
			setError(customMessage);
			return;
		}

		switch (statusCode) {
			case 200:
				setError(null);
				break;

			case 400:
				setError("Error 400");
				break;

			case 422:
				setError("Validation error");
				break;

			case 500:
				setError("Server error");
				break;

			default:
				setError("Unhandled error");
				break;
		}
	};

	useEffect(() => {
		if (error) open();
	}, [error, open]);
	const ModalError = error ? (
		<Modal>
			<div
				style={{
					backgroundColor: "var(--light-grey4)",
					borderRadius: 10,
					padding: "30px 50px",
					position: "absolute",
					zIndex: 12,
					top: "15%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<p
					onClick={() => {
						close();
						setError(null);
					}}
				>
					{error}
				</p>
			</div>
		</Modal>
	) : null;
	return { ModalError, handleError, setError };
}
