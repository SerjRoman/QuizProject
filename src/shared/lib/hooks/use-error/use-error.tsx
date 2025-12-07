import { useEffect, useMemo, useState } from "react";
import { Modal } from "@/shared/ui";
import type { ApiErrorWithSubCode, ErrorMap } from "../../types";
import { useModal } from "../use-modal";
import type { UseErrorReturnType } from "./use-error.types";

function isApiErrorWithErrorCodes(
	error: unknown
): error is ApiErrorWithSubCode {
	return (
		typeof error === "object" &&
		error !== null &&
		"status" in error &&
		"data" in error &&
		typeof error.data === "object"
	);
}

export function useError(): UseErrorReturnType {
	const [error, setError] = useState<string | null>(null);
	const [{ open }, ModalProvider] = useModal<{
		error: string | null;
		setError: (value: string | null) => void;
	}>();

	const handleError = (
		thrownError: Error,
		customHandlers?: ErrorMap | string
	) => {
		let message = "Unhandled error. Try again.";

		if (isApiErrorWithErrorCodes(thrownError)) {
			const status = thrownError.status;
			const messageOrMap = (customHandlers as ErrorMap)[status];
			if (typeof messageOrMap === "string") {
				message = messageOrMap;
			} else if (typeof messageOrMap === "object") {
				const errorCode = thrownError.errorCode;
				if (Array.isArray(errorCode)) {
					message = errorCode
						.map((code) => messageOrMap[code])
						.join(" ");
				} else if (typeof errorCode === "string") {
					message = messageOrMap[errorCode];
				} else {
					message = messageOrMap.__DEFAULT__ || "Validation error.";
				}
			} else {
				message = `Error. Code: ${status}`;
			}
		} else if (typeof customHandlers === "string") {
			message = customHandlers;
		} else if (thrownError instanceof Error) {
			message = thrownError.message;
		}

		setError(message);
	};

	useEffect(() => {
		if (error) open({ setError, error });
	}, [error, open]);
    
	const ModalError = useMemo(
		() =>
			error ? (
				<ModalProvider ModalComponent={Modal.Error}></ModalProvider>
			) : null,
		[ModalProvider, error]
	);
	return { ModalError, handleError, setError };
}
