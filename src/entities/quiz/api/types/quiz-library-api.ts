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
    from?: "copied" | "favourite" | "created" | "all";
    filters?: {
        tagIds: string[];
        languageIds: string[];
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
    tagIds: string[];
    languageIds: string[];
}

export type CreateQuizResponse = IQuiz;
