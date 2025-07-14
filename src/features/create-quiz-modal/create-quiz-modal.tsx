import { Form, Modal } from "@/shared/ui";
import styles from "./create-quiz-modal.module.css";
import type { ICreateQuizFormData } from "./create-quiz-modal.types";

export function CreateQuizModal({
	isOpen,
	onClose,
}: 
{
	isOpen: boolean;
	onClose: () => void;
}) {
	const methodsForm = useForm<ICreateQuizFormData>({
		defaultValues: {
			title: "",
			isPrivate: false,
			coverImage: "",
		},
	});
	return (
		<Modal
			className={styles.modal}
			isOpen={isOpen}
			onClose={onClose}
			doCloseOnClickOutside
		>
			<Form onSubmit={onClose()} methods={methodsForm}>
				<h1>Create your new quiz</h1>
			</Form>
		</Modal>
	);
}
