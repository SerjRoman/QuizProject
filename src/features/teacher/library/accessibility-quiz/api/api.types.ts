import type { QuizAccess } from "@/entities/quiz";

export interface QuizGetAccessesPayload {
	quizId: string;
}
export interface QuizGetAccessesResponse {
	ownedById: string;
	accesses: ({
		profile: {
			user: {
				id: string;
				firstName: string;
				lastName: string;
				avatar: string | null;
			};
		};
	} & {
		id: string;
		quizId: string;
		accessType: QuizAccess;
		profileId: string;
	})[];
}
