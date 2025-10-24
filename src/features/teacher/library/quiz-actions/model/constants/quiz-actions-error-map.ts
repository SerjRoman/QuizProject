import type { ErrorMap } from "@/shared/lib";

export const QUIZ_ACTIONS_ERROR_MAP: Record<"delete" | "copy", ErrorMap> = {
	delete: {
		404: "Quiz not found!",
		422: {
			ID_REQUIRED: "Quiz ID was not provided!",
			__DEFAULT__: "Validation error. Try again!",
		},
	},
	copy: {
		422: {
			ID_REQUIRED: "Quiz ID was not provided!",
			__DEFAULT__: "Validation error. Try again!",
		},
		404: {
			QUIZ_TO_COPY_NOT_FOUND:
				"Quiz to copy was not found. Probably it was deleted.",
		},
		403: {
			NOT_TEACHER: "You are not a teacher!",
		},
	},
};
