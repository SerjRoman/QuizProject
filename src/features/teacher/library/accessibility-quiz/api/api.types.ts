import type { QuizAccess } from "@/entities/quiz";

export interface QuizGetAccessesPayload {
	quizId: string;
}
export type QuizGetAccessesResponse = {
	id: string;
	quizId: string;
	accessType: QuizAccess;
	profileId: string;
	profile: {
		user: {
			id: string;
			firstName: string;
			lastName: string;
			avatar: string | null;
		};
	};
}[];
