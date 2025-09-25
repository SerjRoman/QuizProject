import type { ICreateQuizSchema } from "@/features/teacher";
import { baseApi } from "@/shared/api";

const createQuizApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		createQuiz: build.mutation<void, ICreateQuizSchema>({
			query: (quizData) => ({
				url: "/quizzes",
				method: "POST",
				body: {
					...quizData
				},
			}),
		}),
	}),
});

export const { useCreateQuizMutation } = createQuizApi;
