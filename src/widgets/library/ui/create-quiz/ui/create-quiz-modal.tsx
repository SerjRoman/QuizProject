import { useForm } from "react-hook-form";
import {
	useGetLanguagesQuery,
	useGetSubjectsQuery,
	useGetTagsQuery,
} from "@/features/teacher";
import { VisibilityTypeConstant } from "@/entities/quiz";
import {
	FilterBlock,
	Form,
	Icons,
	MenuButton,
	Modal,
	Radio,
	RadioGroup,
} from "@/shared/ui";
import type { ICreateQuizFormData } from "../model";
import styles from "./create-quiz-modal.module.css";

export function CreateQuizModal({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) {
	const { data: tags } = useGetTagsQuery();
	const { data: subjects } = useGetSubjectsQuery();
	const { data: languages } = useGetLanguagesQuery();

	const methodsForm = useForm<ICreateQuizFormData>({
		defaultValues: {
			title: "",
			visibility: "PUBLIC",
			shuffleQuestions: false,
			shuffleAnswers: false,
			coverImage: "",
		},
	});

	function onSubmit(data: ICreateQuizFormData) {
		return data;
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
						<div className={styles.block}>
							<Form.Input
								name="title"
								label="Title"
								placeholder="Type quiz title here"
								className={styles.titleInput}
								labelClassName={styles.label}
							/>
							<div className={styles.radio}>
								<label className={styles.selectBlock}>
									Visibitily:
									<RadioGroup name={"visibility"}>
										<Radio
											value={
												VisibilityTypeConstant.PRIVATE
											}
											labelClassName={
												styles.select
											}
											label="private"
										/>
										<Radio
											value={
												VisibilityTypeConstant.PUBLIC
											}
											labelClassName={
												styles.select
											}
											label="public"
										/>
									</RadioGroup>
								</label>
								<label className={styles.selectBlock}>
									Shuffle questions:
									<RadioGroup name={"shuffleQuestions"}>
										<Radio
											value={"true"}
											labelClassName={
												styles.select
											}
											label="true"
										/>
										<Radio
											value={"false"}
											labelClassName={
												styles.select
											}
											label="false"
										/>
									</RadioGroup>
								</label>
								<label className={styles.selectBlock}>
									Shuffle answers:
									<RadioGroup name={"shuffleAnswers"}>
										<Radio
											value={"true"}
											labelClassName={
												styles.select
											}
											label="true"
										/>
										<Radio
											value={"false"}
											labelClassName={
												styles.select
											}
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
						<div className={styles.block}>
							<FilterBlock
								title="Tags"
								className={styles.filterBlock}
							>
								{tags?.map((tag) => (
									<div className={styles.item} key={tag.id}>
										{tag.name}
									</div>
								))}
								{/* <div className={styles.item}>tag1</div>
								<div className={styles.item}>tag2</div>
								<div className={styles.item}>tag3</div>
								<div className={styles.item}>tag4</div>
								<div className={styles.item}>tag5</div>
								<div className={styles.item}>tag6</div>
								<div className={styles.item}>tag7</div>
								<div className={styles.item}>tag8</div>
								<div className={styles.item}>tag9</div>
								<div className={styles.item}>tag10</div>
								<div className={styles.item}>tag11</div>
								<div className={styles.item}>tag12</div> */}
							</FilterBlock>
							<FilterBlock
								title="Subject"
								className={styles.filterBlock}
							>
								{subjects?.map((subject) => (
									<div key={subject.id}>{subject.name}</div>
								))}
								{/* <div className={styles.item}>subject1</div>
								<div className={styles.item}>subject2</div>
								<div className={styles.item}>subject3</div>
								<div className={styles.item}>subject4</div>
								<div className={styles.item}>subject5</div>
								<div className={styles.item}>subject6</div>
								<div className={styles.item}>subject7</div>
								<div className={styles.item}>subject8</div>
								<div className={styles.item}>subject9</div>
								<div className={styles.item}>subject10</div>
								<div className={styles.item}>subject11</div>
								<div className={styles.item}>subject12</div> */}
							</FilterBlock>
							<FilterBlock
								title="Languages"
								className={styles.filterBlock}
							>
								{languages?.map((language) => (
									<div key={language.id}>{language.name}</div>
								))}
								{/* <div className={styles.item}>language1</div>
								<div className={styles.item}>language2</div>
								<div className={styles.item}>language3</div>
								<div className={styles.item}>language4</div>
								<div className={styles.item}>language5</div>
								<div className={styles.item}>language6</div>
								<div className={styles.item}>language7</div>
								<div className={styles.item}>language8</div>
								<div className={styles.item}>language9</div>
								<div className={styles.item}>language10</div>
								<div className={styles.item}>language11</div>
								<div className={styles.item}>language12</div> */}
							</FilterBlock>
						</div>
					</div>
					<MenuButton
						className={styles.button}
						title={"Create"}
						enabled
						type="submit"
					/>
				</Form>
			</>
		</Modal>
	);
}
