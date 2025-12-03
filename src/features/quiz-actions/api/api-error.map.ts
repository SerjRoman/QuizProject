import type { ErrorMap } from "@/shared/lib";

export const QUIZ_ACTIONS_API_ERROR_MAP: Record<"copy", ErrorMap> = {
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
