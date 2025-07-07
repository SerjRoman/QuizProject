import { baseApi } from "@/shared/api";
import { QUIZ_API_MAP } from "@/shared/model/constants";
import type { IQuiz } from "./types/quiz";

export const quizApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getAllQuizzes: build.query<IQuiz[], void>({
			query: () => ({
				url: QUIZ_API_MAP.all,
			}),
		}),
	}),
});

export const { useGetAllQuizzesQuery, useLazyGetAllQuizzesQuery } = quizApi;
