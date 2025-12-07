import { API_MAP, baseApi } from "@/shared/api";
import type { QuizDetails } from "../model";

const quizApi = baseApi.injectEndpoints({
	endpoints(build) {
		return {
			getQuizById: build.query<QuizDetails, { quizId: string }>({
				query({ quizId }) {
					return { url: API_MAP.quiz.id(quizId) };
				},
			}),
		};
	},
});
export const { useGetQuizByIdQuery } = quizApi;
