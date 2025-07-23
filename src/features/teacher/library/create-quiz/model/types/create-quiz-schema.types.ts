type QuizVisibilityStatus = "PUBLIC" | "PRIVATE";

export interface ICreateQuizSchema {
    title: string;
	visibility: QuizVisibilityStatus;
	shuffleQuestions: boolean;
	shuffleAnswers: boolean;
	coverImage?: string;
	tagsIds: string[];         
	subjectId: string;       
	languagesIds: string[];
}