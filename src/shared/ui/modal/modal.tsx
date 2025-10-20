import { ErrorModal } from "./error-modal";
import { ModalComponent } from "./modal-component";

export const Modal = Object.assign(ModalComponent, {
	Error: ErrorModal,
});
