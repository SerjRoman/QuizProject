import type { IQuiz } from "@/entities/quiz";

export interface CopyQuizPayload {
	quizId: string;
}
export type CopyQuizResponse = IQuiz;
