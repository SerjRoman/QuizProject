import { Dropdown, IconButton, Icons } from "@/shared/ui";
import { AddQuizToFavouritesButton } from "../../../favourite-quiz";
import styles from "./quiz-actions-group.module.css";
import type { QuizActionsGroupProps } from "./quiz-actions-group.types";

export function QuizActionsGroup({
	quiz,
	onEditAccessibility,
	isOwner,
}: QuizActionsGroupProps) {
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
				dataSource={["Edit", "Delete"]}
				panelClassname={styles.dropdown}
				renderItem={(item) => (
					<button className={styles.dropdownButton}>{item}</button>
				)}
				trigger={({ open, isOpen, close }) => (
					<IconButton onClick={isOpen ? close : open}>
						<Icons.DotsVertical />
					</IconButton>
				)}
			/>
		</div>
	);
}
