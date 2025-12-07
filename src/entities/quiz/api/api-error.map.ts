import type { ErrorMap } from "@/shared/lib";

export const QUIZ_API_ERROR_MAP: Record<"delete" | "create" | "all", ErrorMap> =
	{
		delete: {
			404: "Quiz not found!",
			422: {
				ID_REQUIRED: "Quiz ID was not provided!",
				__DEFAULT__: "Validation error. Try again!",
			},
		},
		create: {},
		all: {},
	};
