import { useForm } from "react-hook-form";
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
	// const {} = useGet
	
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
							<FilterBlock title="Tags">

							</FilterBlock>
							<FilterBlock title="Subject"></FilterBlock>
							<FilterBlock title="Languages"></FilterBlock>
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
