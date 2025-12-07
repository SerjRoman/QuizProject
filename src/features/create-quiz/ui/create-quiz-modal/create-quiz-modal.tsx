import { Icons, Modal, type ModalComponentProps } from "@/shared/ui";
import { CreateQuizForm } from "../create-quiz-form";
import styles from "./create-quiz-modal.module.css";

export function CreateQuizModal({ isOpen, onClose }: ModalComponentProps) {
	return (
		<Modal
			className={styles.modal}
			isOpen={isOpen}
			onClose={onClose}
			doCloseOnClickOutside={false}
		>
			<div className={styles.closeIcon}>
				<Icons.Cross onClick={onClose} />
			</div>
			<div className={styles.form}>
				<h1 className={styles.header}>Create your new quiz</h1>
				<CreateQuizForm onSubmit={onClose} />
			</div>
		</Modal>
	);
}
