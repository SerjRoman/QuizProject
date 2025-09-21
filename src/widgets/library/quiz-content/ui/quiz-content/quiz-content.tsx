import { SortQuizzesHeader } from "@/features/teacher";
import { Paginate } from "@/shared/ui";
import styles from "./quiz-content.module.css";
import type { IQuizContentProps } from "./quiz-content.types";

export function QuizContent({
	onPageChange,
	meta,
	children,
}: IQuizContentProps) {
	return (
		<>
			<SortQuizzesHeader />
			<div className={styles.quizzesList}>{children}</div>
			<Paginate
				className={styles.navPage}
				currentPage={meta.currentPage}
				totalPages={meta.pageCount ?? 1}
				setPage={onPageChange}
			/>
		</>
	);
}
