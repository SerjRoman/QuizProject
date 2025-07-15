type QuizVisibilityStatus = "PUBLIC" | "PRIVATE";

export interface ICreateQuizFormData {
	title: string;
	visibility: QuizVisibilityStatus;
	coverImage?: string;
}
