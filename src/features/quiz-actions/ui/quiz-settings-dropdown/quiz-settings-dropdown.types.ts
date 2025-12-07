import type { QuizLibrary } from "@/entities/quiz";

export interface QuizSettingsDropdownProps {
	quiz: QuizLibrary;
	isOwner: boolean;
}
