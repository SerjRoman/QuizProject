type QuizIsPrivateStatus = "PUBLIC" | "PRIVATE";

export interface ICreateQuizFormData {
	title: string;
	visibility: QuizIsPrivateStatus;
	coverImage?: string;
}
