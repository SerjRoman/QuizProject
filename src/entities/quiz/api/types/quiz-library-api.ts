import type { PaginationResponse } from "@/shared/lib";
import type {
	Quiz,
	OrderOptions,
	QuizStatus,
	QuizVisibility,
	SortOptions,
} from "../../model";

export type QuizLibraryRequest = {
	from?: "copied" | "favourite" | "created" | "all";
	filters: {
		tagIds: string[];
		languageIds: string[];
		subjectId: string | null;
	};
	search?: string;
	page?: number;
	sort?: {
		field: SortOptions;
		order: OrderOptions;
	};
	selectedVisiblities?: QuizVisibility[];
	selectedStatuses?: QuizStatus[];
};
export type QuizLibraryAllResponse = PaginationResponse<Quiz[]>;
export type QuizLibraryAllResponseRaw = PaginationResponse<Quiz[]>;

export interface DeleteQuizPayload {
	id: string;
}
export type DeleteQuizResponse = Quiz;
export interface CreateQuizPayload {
	title: string;
	visibility: QuizVisibility;
	shuffleQuestions: boolean;
	shuffleAnswers: boolean;
	coverImage?: string;
	subjectId: string;
	tagIds: string[];
	languageIds: string[];
}

export type CreateQuizResponse = Quiz;
