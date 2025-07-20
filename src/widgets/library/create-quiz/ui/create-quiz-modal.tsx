import { CreateQuizForm } from "@/features/teacher";
import { Icons, Modal } from "@/shared/ui";
import styles from "./create-quiz-modal.module.css";

export function CreateQuizModal({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) {

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
			<>
				<h1 className={styles.header}>Create your new quiz</h1>
				<CreateQuizForm/>
			</>
		</Modal>
	);
}
