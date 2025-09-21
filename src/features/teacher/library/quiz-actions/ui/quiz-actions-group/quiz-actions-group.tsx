import { IconButton, Icons } from "@/shared/ui";
import { AddQuizToFavouritesButton } from "../../../favourite-quiz";
import styles from "./quiz-actions-group.module.css";
import type { QuizActionsGroupProps } from "./quiz-actions-group.types";

export function QuizActionsGroup({
	quiz,
	onEditAccessibility,
}: QuizActionsGroupProps) {
	return (
		<div className={styles.block}>
			<IconButton
				onClick={() => onEditAccessibility({ quizId: quiz.id })}
			>
				<Icons.Users className={styles.peopleIcon} />
			</IconButton>
			<AddQuizToFavouritesButton
				isFavourite={quiz.isFavourite}
				quizId={quiz.id}
			/>
		</div>
	);
}
