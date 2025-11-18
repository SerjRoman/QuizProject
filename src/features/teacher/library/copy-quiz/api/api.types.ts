import type { IQuiz } from "@/entities/quiz";

export interface CopyQuizPayload {
	id: string;
}
export type CopyQuizResponse = IQuiz;
