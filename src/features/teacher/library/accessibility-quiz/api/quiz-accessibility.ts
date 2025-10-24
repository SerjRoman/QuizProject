import { baseApi } from "@/shared/api";
import { QUIZ_ACCESSIBILITY_API_MAP } from "./api-map";
import type {
	QuizGetAccessesPayload,
	QuizGetAccessesResponse,
} from "./api.types";

const quizAccessibilityApi = baseApi.injectEndpoints({
	endpoints(build) {
		return {
			getAccesses: build.query<
				QuizGetAccessesResponse,
				QuizGetAccessesPayload
			>({
				query({ quizId }) {
					return {
						url: QUIZ_ACCESSIBILITY_API_MAP.getAccessesToQuiz(
							quizId
						),
					};
				},
			}),
		};
	},
});

export const { useGetAccessesQuery } = quizAccessibilityApi;
