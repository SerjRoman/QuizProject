import type { ReactNode } from "react";
import type { ErrorMap } from "../../types";

export type UseErrorReturnType = {
	ModalError: ReactNode;
	setError: (value: string) => void;
	handleError: (
		thrownError: Error,
		customHandlers?: ErrorMap | string
	) => void;
};
