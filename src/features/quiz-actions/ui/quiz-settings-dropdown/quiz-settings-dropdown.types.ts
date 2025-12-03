import type { QuizLibrary } from "@/entities/quiz";

export interface QuizActionsGroupProps {
	quiz: QuizLibrary;
	isOwner: boolean;
}
