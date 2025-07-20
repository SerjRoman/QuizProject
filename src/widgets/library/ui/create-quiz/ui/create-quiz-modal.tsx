import { clsx } from "clsx";
import { useForm } from "react-hook-form";
import { SelectLanguagesBlock } from "@/features/teacher";
import { VisibilityTypeConstant } from "@/entities/quiz";
import { Form, Icons, MenuButton, Modal, Radio, RadioGroup } from "@/shared/ui";
import type { ICreateQuizFormData } from "../model";
import styles from "./create-quiz-modal.module.css";

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
			visibility: "PUBLIC",
			shuffleQuestions: false,
			shuffleAnswers: false,
			coverImage: "",
			tags: [],
			subject: "",
			languages: [],
		},
	});

	function onSubmit(data: ICreateQuizFormData) {
		console.log(data);
	}

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
				<Form onSubmit={onSubmit} methods={methodsForm}>
					<div className={styles.main}>
						<div className={clsx(styles.block, styles.left)}>
							<Form.Input
								name="title"
								label="Title"
								placeholder="Type quiz title here"
								className={styles.titleInput}
								labelClassName={styles.label}
								rules={{
									required: "Title is required",
									minLength: {
										value: 3,
										message:
											"Title must have at least 3 characters",
									},
								}}
							/>
							<div className={styles.radio}>
								<label className={styles.selectBlock}>
									Visibitily:
									<RadioGroup name={"visibility"}>
										<Radio
											value={
												VisibilityTypeConstant.PRIVATE
											}
											labelClassName={styles.select}
											// className={styles.radio}
											label="private"
										/>
										<Radio
											value={
												VisibilityTypeConstant.PUBLIC
											}
											labelClassName={styles.select}
											label="public"
										/>
									</RadioGroup>
								</label>
								<label className={styles.selectBlock}>
									Shuffle questions:
									<RadioGroup name={"shuffleQuestions"}>
										<Radio
											value={"true"}
											labelClassName={styles.select}
											label="true"
										/>
										<Radio
											value={"false"}
											labelClassName={styles.select}
											label="false"
										/>
									</RadioGroup>
								</label>
								<label className={styles.selectBlock}>
									Shuffle answers:
									<RadioGroup name={"shuffleAnswers"}>
										<Radio
											value={"true"}
											labelClassName={styles.select}
											label="true"
										/>
										<Radio
											value={"false"}
											labelClassName={styles.select}
											label="false"
										/>
									</RadioGroup>
								</label>
							</div>

							<div className={styles.imageBlock}>
								<p>Cover Image</p>
								<div className={styles.image}>+</div>
							</div>
						</div>
						<div className={clsx(styles.block, styles.right)}>
							{/* <SelectTagsBlock /> */}
							{/* <SelectSubjectBlock /> */}
							<SelectLanguagesBlock />
						</div>
					</div>
					<MenuButton
						className={styles.button}
						title={"Create"}
						type="submit"
						enabled
					/>
				</Form>
			</>
		</Modal>
	);
}
