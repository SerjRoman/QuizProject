import { AccessButton } from "@/features/quiz-access";
import { QuizSettingsDropdown } from "@/features/quiz-actions";
import { ToggleFavouriteQuizButton } from "@/features/toggle-favourite-quiz";
import type { QuizLibrary } from "@/entities/quiz";
import { useAppSelector } from "@/shared/lib";
import styles from "./quiz-actions-group.module.css";

interface QuizActionsGroupProps {
	quiz: QuizLibrary;
	onEditAccess: () => void;
}

export function QuizActionsGroup({
	quiz,
	onEditAccess,
}: QuizActionsGroupProps) {
	const { user } = useAppSelector((state) => state.user);
	return (
		<div className={styles.container}>
			<ToggleFavouriteQuizButton
				isFavourite={quiz.isFavourite}
				quizId={quiz.id}
			/>
			<AccessButton onClick={() => onEditAccess()} />

			<QuizSettingsDropdown
				quiz={quiz}
				isOwner={user?.id === quiz.owner.user.id}
			/>
		</div>
	);
}
