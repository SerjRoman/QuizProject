type QuizVisibilityStatus = "PUBLIC" | "PRIVATE";

export interface ICreateQuizFormData {
	title: string;
	visibility: QuizVisibilityStatus;
	shuffleQuestions: string;
	shuffleAnswers: string;
	coverImage?: string;
	tags: string[];         
	subject: string;       
	languages: string[];
}
