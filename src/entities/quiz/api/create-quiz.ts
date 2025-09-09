import type { ICreateQuizFormData } from "@/features/teacher";
import { baseApi } from "@/shared/api";

export const createQuizApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		createQuiz: build.mutation<void, ICreateQuizFormData>({
			query: (quizData) => ({
				url: "/quizzes",
				method: "POST",
				body: {
					title: quizData.title,
					subjectId: quizData.subjectId,
					coverImage: quizData.coverImage,
					tagsIds: quizData.tagsIds,
					languagesIds: quizData.languagesIds,
					visibility: quizData.visibility, 
					shuffleAnswers: quizData.shuffleAnswers,
					shuffleQuestions: quizData.shuffleQuestions,
				},
			}),
		}),
	}),
});

export const { useCreateQuizMutation } = createQuizApi;
