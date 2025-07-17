import { clsx } from "clsx";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import {
	useGetLanguagesQuery,
	useGetSubjectsQuery,
	useGetTagsQuery,
} from "@/features/teacher";
import { VisibilityTypeConstant } from "@/entities/quiz";
import {
	Checkbox,
	CheckboxGroup,
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
import { ShowMoreModal } from "./show-more-modal";

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

	const [isFullOpenTags, setIsFullOpenTags] = useState<boolean>(false);
	const [isFullOpenSubjects, setIsFullOpenSubjects] =
		useState<boolean>(false);
	const [isFullOpenLanguages, setIsFullOpenLanguages] =
		useState<boolean>(false);

	const [isShowMoreTagsOpen, setIsShowMoreTagsOpen] = useState(false);
	const [isShowMoreSubjectsOpen, setIsShowMoreSubjectsOpen] = useState(false);
	const [isShowMoreLanguagesOpen, setIsShowMoreLanguagesOpen] =
		useState(false);

	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
	const [selectedSubject, setSelectedSubject] = useState<string>("");

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

	const topTags = useMemo(() => {
		if (!tags) return [];
		const uniqueTagIds = new Set(selectedTags);
		const selectedTagObjects = tags.filter((tag) =>
			selectedTags.includes(tag.id)
		);
		const restTags = tags.filter((tag) => !uniqueTagIds.has(tag.id));
		return [...selectedTagObjects, ...restTags].slice(0, 5);
	}, [tags, selectedTags]);

	const topLanguages = useMemo(() => {
		if (!languages) return [];
		const selectedSet = new Set(selectedLanguages);
		const selectedObjs = languages.filter((l) =>
			selectedLanguages.includes(l.id)
		);
		const rest = languages.filter((l) => !selectedSet.has(l.id));
		return [...selectedObjs, ...rest].slice(0, 5);
	}, [languages, selectedLanguages]);

	const topSubjects = useMemo(() => {
		if (!subjects) return [];
		const selectedObj = subjects.find((s) => s.id === selectedSubject);
		const rest = subjects.filter((s) => s.id !== selectedSubject);
		return selectedObj
			? [selectedObj, ...rest].slice(0, 5)
			: subjects.slice(0, 5);
	}, [subjects, selectedSubject]);

	function handleAddTags(newTags: string[]) {
		setSelectedTags(newTags);
		setIsShowMoreTagsOpen(false);
	}

	function handleAddSubject(subject: string) {
		setSelectedSubject(subject);
		setIsShowMoreSubjectsOpen(false);
	}
	function handleAddLanguages(newLanguages: string[]) {
		setSelectedLanguages(newLanguages);
		setIsShowMoreLanguagesOpen(false);
	}

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
							<FilterBlock
								actions={
									tags && tags.length > 5 ? (
										<p
											className={clsx(
												styles.showMore,
												styles.shMTag
											)}
											onClick={() => {
												setIsFullOpenTags(
													!isFullOpenTags
												);
												setIsShowMoreTagsOpen(
													!isShowMoreTagsOpen
												);
											}}
										>
											Show more
										</p>
									) : undefined
								}
								title="Tags"
								className={styles.filterBlock}
							>
								<CheckboxGroup name={"tags"}>
									{topTags.map((tag) => (
										<Checkbox
											value={tag.id}
											labelClassName={clsx(
												styles.item,
												styles.tag
											)}
											key={tag.id}
											label={tag.name}
										/>
									))}
								</CheckboxGroup>
							</FilterBlock>
							<ShowMoreModal
								title="tags"
								isOpen={isShowMoreTagsOpen}
								onClose={() =>
									setIsShowMoreTagsOpen(!isShowMoreTagsOpen)
								}
								onAdd={() => {
									const selected = methodsForm.getValues(
										"tags"
									) as string[];
									handleAddTags(selected);
								}}
							>
								<CheckboxGroup name={"tags"}>
									{tags?.map((tag) => (
										<Checkbox
											value={tag.id}
											labelClassName={clsx(
												styles.item,
												styles.tag
											)}
											key={tag.id}
											label={tag.name}
										/>
									))}
								</CheckboxGroup>
							</ShowMoreModal>
							<FilterBlock
								actions={
									subjects && subjects.length > 5 ? (
										<p
											className={clsx(
												styles.showMore,
												styles.shMSub
											)}
											onClick={() => {
												setIsFullOpenSubjects(
													!isFullOpenSubjects
												);
												setIsShowMoreSubjectsOpen(
													!isShowMoreSubjectsOpen
												);
											}}
										>
											Show more
										</p>
									) : undefined
								}
								title="Subject"
								className={styles.filterBlock}
							>
								<RadioGroup name={"subject"}>
									{topSubjects.map((subject) => (
										<Radio
											labelClassName={clsx(
												styles.item,
												styles.subject
											)}
											key={subject.id}
											label={subject.name}
											value={subject.id}
											isRadioVisible={false}
										/>
									))}
								</RadioGroup>
							</FilterBlock>
							<ShowMoreModal
								title="subjects"
								isOpen={isShowMoreSubjectsOpen}
								onClose={() =>
									setIsShowMoreSubjectsOpen(
										!isShowMoreSubjectsOpen
									)
								}
								onAdd={() => {
									const selected = methodsForm.getValues(
										"subject"
									) as string;
									handleAddSubject(selected);
								}}
							>
								<RadioGroup name={"subject"}>
									{subjects?.map((subject) => (
										<Radio
											labelClassName={clsx(
												styles.item,
												styles.subject
											)}
											key={subject.id}
											label={subject.name}
											value={subject.id}
											isRadioVisible={false}
										/>
									))}
								</RadioGroup>
							</ShowMoreModal>
							<FilterBlock
								actions={
									languages && languages.length > 5 ? (
										<p
											className={clsx(
												styles.showMore,
												styles.shMLan
											)}
											onClick={() => {
												setIsFullOpenLanguages(
													!isFullOpenLanguages
												);
												setIsShowMoreLanguagesOpen(
													!isShowMoreLanguagesOpen
												);
											}}
										>
											Show more
										</p>
									) : undefined
								}
								title="Languages"
								className={styles.filterBlock}
							>
								<CheckboxGroup name={"languages"}>
									{topLanguages.map((language) => (
										<Checkbox
											value={language.id}
											key={language.id}
											label={language.name}
											labelClassName={clsx(
												styles.item,
												styles.language
											)}
										/>
									))}
								</CheckboxGroup>
							</FilterBlock>
							<ShowMoreModal
								title="languages"
								isOpen={isShowMoreLanguagesOpen}
								onClose={() =>
									setIsShowMoreLanguagesOpen(
										!isShowMoreLanguagesOpen
									)
								}
								onAdd={() => {
									const selected = methodsForm.getValues(
										"languages"
									) as string[];
									handleAddLanguages(selected);
								}}
							>
								<CheckboxGroup name={"languages"}>
									{languages?.map((language) => (
										<Checkbox
											value={language.id}
											key={language.id}
											label={language.name}
											labelClassName={clsx(
												styles.item,
												styles.language
											)}
										/>
									))}
								</CheckboxGroup>
							</ShowMoreModal>
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
