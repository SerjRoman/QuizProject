import type { QuizVisibility } from "@/entities/quiz";

export interface ICreateQuizFormData {
	title: string;
	subjectId: string;  
	coverImage?: string;
	tagsIds: string[];   
	languagesIds: string[];
	visibility: QuizVisibility;
	shuffleAnswers: boolean;
	shuffleQuestions: boolean;
}
