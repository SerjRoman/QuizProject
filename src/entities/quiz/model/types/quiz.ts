import type { Taxonomy } from "@/shared/lib";
import type { TeacherProfile, User } from "../../@x";
import type { QuizVisibility, QuizStatus } from "./quiz-filters";

export interface Quiz {
	id: string;
	title: string;
	coverImage: string | null;
	createdAt: Date;
	updatedAt: Date;
	owner?: TeacherProfile;
	isFavourite: boolean;
}

export interface QuizDetails extends Quiz {
	visibility: QuizVisibility;
	status: QuizStatus;
	shuffleAnswers: boolean;
	shuffleQuestions: boolean;
	tags: Taxonomy[];
	languages: Taxonomy[];
	subject: Taxonomy;
	favouritesCount: number;
	favouritedBy: User[];
	copiesCount: number;
	copiedBy: TeacherProfile[];
	originalQuiz: Quiz;
	creator: TeacherProfile;
}
