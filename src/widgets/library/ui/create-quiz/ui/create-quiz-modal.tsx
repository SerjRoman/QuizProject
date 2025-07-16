import { useForm } from "react-hook-form";
import {
	useGetLanguagesQuery,
	useGetSubjectsQuery,
	useGetTagsQuery,
} from "@/features/quiz-filters";
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
							<div className={styles.selectVisibilityBlock}>
								<RadioGroup name={"visibility"}>
									<Radio
										value={VisibilityTypeConstant.PRIVATE}
										labelClassName={styles.selectVisibility}
										label="private"
									/>
									<Radio
										value={VisibilityTypeConstant.PUBLIC}
										labelClassName={styles.selectVisibility}
										label="public"
									/>
								</RadioGroup>
							</div>
							<div className={styles.imageBlock}>
								<p>Cover Image</p>
								<div className={styles.image}>+</div>
							</div>
						</div>
						<div className={styles.block}>
							{/* <div className={styles.filterBlock}>
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
						</div> */}
							<FilterBlock
								title="Tags"
								className={styles.filterBlock}
							>
								{tags?.map((tag) => (
									<div key={tag.id}>{tag.name}</div>
								))}
								<div>tag1</div>
								<div>tag2</div>
								<div>tag3</div>
								<div>tag4</div>
								<div>tag5</div>
								<div>tag6</div>
								<div>tag7</div>
								<div>tag8</div>
								<div>tag9</div>
								<div>tag10</div>
								<div>tag11</div>
								<div>tag12</div>

							</FilterBlock>
							<FilterBlock
								title="Subject"
								className={styles.filterBlock}
							>
								{subjects?.map((subject) => (
									<div key={subject.id}>{subject.name}</div>
								))}
							</FilterBlock>
							<FilterBlock
								title="Languages"
								className={styles.filterBlock}
							>
								{languages?.map((language) => (
									<div key={language.id}>{language.name}</div>
								))}
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
