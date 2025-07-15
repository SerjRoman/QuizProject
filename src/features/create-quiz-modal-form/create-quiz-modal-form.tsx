import { useForm } from "react-hook-form";
import { PrivateTypeConstant } from "@/entities/quiz";
import { Form, MenuButton, Radio, RadioGroup } from "@/shared/ui";
import styles from "./create-quiz-modal-form.module.css";
import type { ICreateQuizFormData } from "./create-quiz-modal-form.types";

export function CreateQuizModalForm() {
	const methodsForm = useForm<ICreateQuizFormData>({
		defaultValues: {
			title: "",
			visibility: "PUBLIC",
			coverImage: "",
		},
	});

	function onSubmit(data: ICreateQuizFormData){
		return data
	}

	return (
		<>
			<h1 className={styles.header}>Create your new quiz</h1>
			<div className={styles.main}>
				<div className={styles.block}>
					<Form onSubmit={onSubmit} methods={methodsForm}>
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
						<div className={styles.imageBlock}>
							<p>Cover Image</p>
							<div className={styles.image}>+</div>
						</div>
					</Form>
				</div>
				<div className={styles.block}>
					<div className={styles.filterBlock}>
						<p>Tags</p>
						<h4>lfdlfdlfdlfd</h4>
					</div>
					<div className={styles.filterBlock}>
						<p>Subject</p>
						<h4>lfdlfdlfdlfd</h4>
					</div>
					<div className={styles.filterBlock}>
						<p>Languages</p>
						<h4>lfdlfdlfdlfd</h4>
					</div>
				</div>
			</div>
			<MenuButton
				className={styles.button}
				title={"Create"}
				enabled
				onClick={() => {}}
			/>
		</>
		// </Modal>
	);
}
