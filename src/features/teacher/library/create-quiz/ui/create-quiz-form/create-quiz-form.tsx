// import { yupResolver } from "@hookform/resolvers/yup";
import { clsx } from "clsx";
import { useForm } from "react-hook-form";
import { useCreateQuizMutation } from "@/entities/quiz";
import { MenuButton, Form } from "@/shared/ui";
import {
	type ICreateQuizFormData,
	// createQuizFormSchema,
} from "../../model";
import { SelectLanguagesBlock } from "../select-languages";
import { SelectShuffleAnswers } from "../select-shuffle-answers";
import { SelectShuffleQuestions } from "../select-shuffle-questions";
import { SelectSubjectBlock } from "../select-subject";
import { SelectTagsBlock } from "../select-tags";
import { SelectVisibility } from "../select-visibility";
import { UploadImage } from "../upload-image";
import styles from "./create-quiz-form.module.css";

export function CreateQuizForm() {
	const [createQuiz] = useCreateQuizMutation();
	const methodsForm = useForm<ICreateQuizFormData >({
		// resolver: yupResolver(createQuizFormSchema),
		defaultValues: {
			title: "",
			visibility: "PRIVATE",
			shuffleQuestions: false,
			shuffleAnswers: "false",
			coverImage: "",
			tags: [],
			subject: "",
			languages: [],
		}
		
	});

	// const { register } = useForm<ICreateQuizSchema>({
	// 	resolver: yupResolver(createQuizFormSchema)
	// });

	async function onSubmit(data: ICreateQuizFormData) {
		try {
			await createQuiz(data).unwrap();
			alert("Quiz was successfully created!");
		} catch (err) {
			console.error("Error creating quiz:", err);
		}
	}

	return (
		<Form onSubmit={onSubmit} methods={methodsForm}>
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
			/>
		</Form>
	);
}
