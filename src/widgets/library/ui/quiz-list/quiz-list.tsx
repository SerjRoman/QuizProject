import { SortQuizzesHeader } from "@/features/sort-quizzes";
import { QuizItem } from "@/entities/quiz";
import { Paginate } from "@/shared/ui";
import styles from "./quiz-list.module.css";
import type { QuizContentProps } from "./quiz-list.types";

export function QuizList(props: QuizContentProps) {
	const { data, isLoading, error, userId, onPageChange, renderActions } =
		props;

	if (isLoading) return <div>Loading quizzes...</div>;
	if (error) return <div>Error loading data</div>;
	if (!data?.data.length) return <div>No quizzes found</div>;
	const { data: quizzesData, meta } = data;
	return (
		<>
			<SortQuizzesHeader />
			<div className={styles.quizzesList}>
				{quizzesData.map((quiz) => (
					<QuizItem
						key={quiz.id}
						quiz={quiz}
						actions={renderActions(quiz)}
						isMy={userId === quiz.createdBy.user.id}
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
