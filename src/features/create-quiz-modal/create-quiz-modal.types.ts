type QuizIsPrivateStatus = "PUBLIC" | "PRIVATE";

export interface ICreateQuizFormData {
	title: string;
	isPrivate: QuizIsPrivateStatus;
	coverImage?: string;
}
