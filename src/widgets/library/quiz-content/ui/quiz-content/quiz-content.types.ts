import type { QuizLibrary } from "@/entities/quiz";
import type { PaginationData } from "@/shared/lib";

export interface IQuizContentProps {
	quizzes: QuizLibrary[];
	meta: PaginationData;
	onPageChange: (page: number) => void;
}
