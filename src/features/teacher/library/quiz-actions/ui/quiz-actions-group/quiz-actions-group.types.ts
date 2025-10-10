import type { QuizLibrary } from "@/entities/quiz";

export interface QuizActionsGroupProps {
	quiz: QuizLibrary;
	onEditAccessibility: ({ quizId }: { quizId: string }) => void;
	isOwner: boolean;
}
