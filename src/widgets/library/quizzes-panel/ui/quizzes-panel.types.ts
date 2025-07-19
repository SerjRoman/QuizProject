import type { ReactNode } from "react";
import type { QuizLibraryRequest } from "@/entities/quiz";

export interface IQuizzesPanel {
	filters?: ReactNode;
	queryArgs?: Partial<QuizLibraryRequest>;
}
