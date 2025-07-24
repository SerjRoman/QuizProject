type QuizVisibilityStatus = "PUBLIC" | "PRIVATE";

export interface ICreateQuizFormData {
	title: string;
	subject: string;  
	coverImage?: string;
	tags: string[];   
	languages: string[];
	visibility: QuizVisibilityStatus;
	shuffleAnswers: boolean;
	shuffleQuestions: boolean;
}
