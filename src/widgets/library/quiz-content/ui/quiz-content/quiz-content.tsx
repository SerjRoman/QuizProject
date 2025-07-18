import { SortQuizzesHeader } from "@/features/teacher";
import { QuizItem } from "@/entities/quiz";
import { Paginate } from "@/shared/ui";
import styles from "./quiz-content.module.css";
import type { IQuizContentProps } from "./quiz-content.types";

export function QuizContent({
	onPageChange,
	quizzes,
	meta,
}: IQuizContentProps) {
	return (
		<>
			<SortQuizzesHeader />
			<div className={styles.quizzesList}>
				{quizzes.map((quiz) => (
					<QuizItem
						key={quiz.id}
						quiz={{
							isFavourite: quiz.isFavourite,
							id: quiz.id,
							title: quiz.title,
							createdAt: quiz.createdAt,
							user: quiz.createdBy.user,
							coverImage: quiz.coverImage,
						}}
						actions={<></>}
					/>
				))}
			</div>
			<Paginate
				className={styles.navPage}
				currentPage={meta.currentPage}
				totalPages={meta.pageCount ?? 1}
				setPage={onPageChange}
			/>
		</>
	);
}
