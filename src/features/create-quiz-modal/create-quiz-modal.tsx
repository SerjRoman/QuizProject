import { useForm } from "react-hook-form";
import { Form, MenuButton, Modal, Radio, RadioGroup } from "@/shared/ui";
import styles from "./create-quiz-modal.module.css";
import type { ICreateQuizFormData } from "./create-quiz-modal.types";
import { PrivateTypeConstant } from "@/entities/quiz";

export function CreateQuizModal({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) {
	const methodsForm = useForm<ICreateQuizFormData>({
		defaultValues: {
			title: "",
			isPrivate: "PUBLIC",
			coverImage: "",
		},
	});

	// function onSubmit(data: ICreateQuizFormData){

	// }

	return (
		<Modal
			className={styles.modal}
			isOpen={isOpen}
			onClose={onClose}
			doCloseOnClickOutside
		>
			<h1 className={styles.header}>Create your new quiz</h1>
			<div>
				<div className={styles.block}>
					<Form onSubmit={onClose} methods={methodsForm}>
						<Form.Input
							name="title"
							label="Title"
							placeholder="Type quiz title here"
							className={styles.titleInput}
							labelClassName={styles.label}
						/>
						<div className={styles.selectIsPrivateBlock}>
							<RadioGroup name={"isPrivate"}>
								<Radio
									value={PrivateTypeConstant.PRIVATE}
									labelClassName={styles.selectIsPrivate}
									label="private"
								/>
								<Radio
									value={PrivateTypeConstant.PUBLIC}
									labelClassName={styles.selectIsPrivate}
									label="public"
								/>
							</RadioGroup>
						</div>
					</Form>
				</div>
				<div className={styles.block}></div>
			</div>
			<MenuButton
					className={styles.button}
					title={"Create"}
					enabled
					onClick={() => {}}
				/>
		</Modal>
	);
}
