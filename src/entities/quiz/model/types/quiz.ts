import type { User } from "@/entities/user";
import type { QuizStatus, QuizVisibility } from "./quiz-filters";

export interface IQuiz {
	id: string;
	title: string;
	visibility: boolean;
	status: QuizStatus;
	coverImage: string | null;
	tagIds: string[];
	languageIds: string[];
	shuffleAnswers: boolean;
	shuffleQuestions: boolean;
	subjectId: string;
	createdAt: Date;
	updatedAt: Date;
	favouritedByIds: string[];
	createdById: string;
	copiedByIds: string[];
	completedByIds: string[];
	folderIds: string[];
}

export interface QuizLibrary {
	id: string;
	title: string;
	visibility: QuizVisibility;
	status: QuizStatus;
	coverImage: null | string;
	shuffleAnswers: boolean;
	shuffleQuestions: boolean;
	creator: {
		id: string;
		user: User;
	};
	owner: {
		id: string;
		user: User;
	};
	createdAt: Date;
	updatedAt: Date;
	isFavourite: boolean;
}
