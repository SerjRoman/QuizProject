import type { PaginationResponse } from "@/shared/lib";
import type {
	IQuiz,
	OrderOptions,
	QuizLibrary,
	QuizStatus,
	QuizVisibility,
	SortOptions,
} from "../../model";

export type QuizLibraryRequest = {
	from?: "copied" | "favourite" | "created";
	filters?: {
		tagsIds: string[];
		languagesIds: string[];
		subjectId: string;
	};
	search?: string;
	page?: number;
	sort?: {
		field: SortOptions;
		order: OrderOptions;
	};
	visibility?: QuizVisibility[];
	status?: QuizStatus[];
};
export type QuizLibraryAllResponse = PaginationResponse<QuizLibrary[]>;
export type QuizLibraryAllResponseRaw = PaginationResponse<QuizLibrary[]>;

export interface DeleteQuizPayload {
	id: string;
}
export type DeleteQuizResponse = IQuiz;
export interface CreateQuizPayload {
    title: string;
    visibility: QuizVisibility;
    shuffleQuestions: boolean;
    shuffleAnswers: boolean;
    coverImage?: string;
    subjectId: string;
    tagsIds: string[];
    languagesIds: string[];
}

export type CreateQuizResponse = IQuiz