import type { QuizStatus } from "./quiz-status";

export interface IQuiz {
	id: string;
	title: string;
	isPrivate: boolean;
	status: QuizStatus;
	coverImage: string | null;
	tagsIds: string[];
	languagesIds: string[];
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

export type QuizLibrary = Pick<IQuiz, "id" | "title" | "createdAt"> & {
	isFavourite: boolean;
};
