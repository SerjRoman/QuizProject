import type { PaginationResponse } from "@/shared/lib";
import type { OrderOptions, QuizLibrary, SortOptions } from "../../model";

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
};
export type QuizLibraryAllResponse = PaginationResponse<QuizLibrary[]>;
export type QuizLibraryAllResponseRaw = PaginationResponse<QuizLibrary[]>;

export type QuizLibraryFavourite = {
	id: string;
};
