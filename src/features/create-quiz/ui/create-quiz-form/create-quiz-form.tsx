import { yupResolver } from "@hookform/resolvers/yup";
import { clsx } from "clsx";
import { useForm } from "react-hook-form";
import { MenuButton, Form } from "@/shared/ui";
import { createQuizFormSchema, useCreateQuiz } from "../../model";
import { SelectLanguagesBlock } from "../select-languages";
import { SelectShuffleAnswers } from "../select-shuffle-answers";
import { SelectShuffleQuestions } from "../select-shuffle-questions";
import { SelectSubjectBlock } from "../select-subject";
import { SelectTagsBlock } from "../select-tags";
import { SelectVisibility } from "../select-visibility";
import { UploadCover } from "../upload-cover";
import styles from "./create-quiz-form.module.css";

export function CreateQuizForm({ onSubmit }: { onSubmit: () => void }) {
	const methodsForm = useForm({
		resolver: yupResolver(createQuizFormSchema),
		defaultValues: {
			title: "",
			visibility: "PUBLIC",
			shuffleQuestions: "false",
			shuffleAnswers: "false",
			coverImage: undefined,
			tagIds: [],
			subjectId: "",
			languageIds: [],
		},
	});
	const { submitCreateQuiz, ModalError, isLoading } = useCreateQuiz(() =>
		onSubmit()
	);
	return (
		<Form
			onSubmit={submitCreateQuiz}
			methods={methodsForm}
			formProps={{ className: styles.form }}
		>
			<div className={styles.main}>
				<div className={clsx(styles.block, styles.left)}>
					<Form.Input
						name="title"
						label="Title"
						placeholder="Type quiz title here"
						className={styles.titleInput}
						labelClassName={styles.label}
					/>
					<div className={styles.radio}>
						<SelectVisibility />
						<SelectShuffleQuestions />
						<SelectShuffleAnswers />
					</div>

					<div className={styles.imageBlock}>
						<p>Cover Image</p>
						<UploadCover />
					</div>
				</div>
				<div className={clsx(styles.block, styles.right)}>
					<SelectTagsBlock />
					<SelectSubjectBlock />
					<SelectLanguagesBlock />
				</div>
			</div>
			<MenuButton
				className={styles.button}
				title={"Create"}
				type="submit"
				enabled
				disabled={isLoading}
			/>
			{ModalError}
		</Form>
	);
}
