import { ModalComponent } from "../modal-component";
import type { ErrorModalProps } from "./error-moda.types";

export function ErrorModal({ error, setError, ...restProps }: ErrorModalProps) {
	return (
		<ModalComponent {...restProps}>
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
						restProps.onClose();
						setError?.(null);
					}}
				>
					{error}
				</p>
			</div>
		</ModalComponent>
	);
}
