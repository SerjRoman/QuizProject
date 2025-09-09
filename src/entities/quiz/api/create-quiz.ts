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
					subjectId: quizData.subject,
					coverImage: quizData.coverImage,
					tagsIds: quizData.tags,
					languagesIds: quizData.languages,
					visibility: quizData.visibility, 
					shuffleAnswers: quizData.shuffleAnswers,
					shuffleQuestions: quizData.shuffleQuestions,
				},
			}),
		}),
	}),
});

export const { useCreateQuizMutation } = createQuizApi;
