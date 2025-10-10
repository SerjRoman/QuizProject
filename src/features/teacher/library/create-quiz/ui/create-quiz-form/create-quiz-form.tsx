import { yupResolver } from "@hookform/resolvers/yup";
import { clsx } from "clsx";
import { useForm } from "react-hook-form";
import { useError } from "@/shared/lib";
import { MenuButton, Form } from "@/shared/ui";
import { useCreateQuizMutation } from "../../api";
import { type ICreateQuizSchema, createQuizFormSchema } from "../../model";
import { SelectLanguagesBlock } from "../select-languages";
import { SelectShuffleAnswers } from "../select-shuffle-answers";
import { SelectShuffleQuestions } from "../select-shuffle-questions";
import { SelectSubjectBlock } from "../select-subject";
import { SelectTagsBlock } from "../select-tags";
import { SelectVisibility } from "../select-visibility";
import { UploadImage } from "../upload-image";
import styles from "./create-quiz-form.module.css";

export function CreateQuizForm({ close }: { close: () => void }) {
	const [createQuiz, { isLoading }] = useCreateQuizMutation();
	const methodsForm = useForm({
		resolver: yupResolver(createQuizFormSchema),
		defaultValues: {
			title: "",
			visibility: "PUBLIC",
			shuffleQuestions: "false",
			shuffleAnswers: "false",
			coverImage: "",
			tagsIds: [],
			subjectId: "",
			languagesIds: [],
		},
	});
	const { ModalError, handleError } = useError();

	async function onSubmit(data: ICreateQuizSchema) {
		try {
			await createQuiz({
				...data,
				shuffleAnswers: data.shuffleAnswers === "true",
				shuffleQuestions: data.shuffleQuestions === "true",
				coverImage:
					data.coverImage === "" ? undefined : data.coverImage,
			}).unwrap();
			close();
		} catch (err) {
			console.error("Error creating quiz:", err);
			if (err instanceof Error) {
				if ("status" in err) {
					if (typeof err?.status === "number") {
						handleError(err.status);
					} else {
						handleError(null, "Unhandled error");
					}
				}
			}
		}
	}

	return (
		<Form
			onSubmit={onSubmit}
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
						<UploadImage />
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
