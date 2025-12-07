import type { Quiz } from "@/entities/quiz";

export interface CopyQuizPayload {
	quizId: string;
}
export type CopyQuizResponse = Quiz;
