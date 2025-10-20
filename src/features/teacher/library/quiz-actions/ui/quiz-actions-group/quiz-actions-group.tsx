import { useError } from "@/shared/lib";
import { Dropdown, IconButton, Icons } from "@/shared/ui";
import { useDeleteQuizMutation } from "../../../delete-quiz/api";
import { AddQuizToFavouritesButton } from "../../../favourite-quiz";
import { QUIZ_ACTIONS_ERROR_MAP } from "../../model";
import styles from "./quiz-actions-group.module.css";
import type { QuizActionsGroupProps } from "./quiz-actions-group.types";

export function QuizActionsGroup({
	quiz,
	onEditAccessibility,
	isOwner,
}: QuizActionsGroupProps) {
	const [deleteQuiz] = useDeleteQuizMutation();
	const { ModalError, handleError } = useError();
	const handleDelete = () => {
		try {
			deleteQuiz({ id: quiz.id }).unwrap();
		} catch (err) {
			console.error("Error creating quiz:", err);
			if (err instanceof Error) {
				handleError(err, QUIZ_ACTIONS_ERROR_MAP.delete);
			}
		}
	};
	const ACTIONS = [
		{
			title: "Edit",
			//! FIX NOOP
			onClick: () => {},
		},
		{
			title: "Delete",
			onClick: handleDelete,
		},
	];

	return (
		<div className={styles.block}>
			{isOwner && (
				<IconButton
					onClick={() => onEditAccessibility({ quizId: quiz.id })}
				>
					<Icons.Users className={styles.peopleIcon} />
				</IconButton>
			)}
			<AddQuizToFavouritesButton
				isFavourite={quiz.isFavourite}
				quizId={quiz.id}
			/>
			<Dropdown
				dataSource={ACTIONS}
				className={styles.dropdown}
				renderItem={(item) => (
					<button
						className={styles.dropdownButton}
						onClick={item.onClick}
					>
						{item.title}
					</button>
				)}
				closeOn="leave"
				trigger={({ open, isOpen, close }) => (
					<IconButton onClick={isOpen ? close : open}>
						<Icons.DotsVertical />
					</IconButton>
				)}
			/>
			{ModalError}
		</div>
	);
}
