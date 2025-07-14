// type QuizStatus = "PUBLISHED" | "DRAFT";

export interface ICreateQuizFormData {
	// id:number
	title: string;
	isPrivate: boolean;
	// status: QuizStatus;
	coverImage?: string;
}
