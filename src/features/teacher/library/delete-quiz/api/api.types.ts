import type { IQuiz } from "@/entities/quiz";

export interface DeleteQuizPayload {
	id: string;
}
export type DeleteQuizResponse = IQuiz;
