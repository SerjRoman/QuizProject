type QuizVisibilityStatus = "PUBLIC" | "PRIVATE";

export interface ICreateQuizFormData {
	title: string;
	visibility: QuizVisibilityStatus;
	shuffleQuestions: boolean;
	shuffleAnswers: boolean;
	coverImage?: string;
	tags: string[];         
	subject: string;       
	languages: string[];
}
