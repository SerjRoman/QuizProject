import type { ICreateQuizFormData } from "@/features/teacher";
import { baseApi } from "@/shared/api";

export const createQuizApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		createQuiz: build.mutation<void, ICreateQuizFormData>({
			query: (quizData) => ({
				url: "/quizzes",
				method: "POST",
				body: quizData,
				// {
				// 	tagsIds: quizData.tagsIds,
				// 	subjectId: quizData.subjectId,
				// 	languagesIds: quizData.languagesIds
				// },
			}),
		}),
	}),
});

export const { useCreateQuizMutation } = createQuizApi;
