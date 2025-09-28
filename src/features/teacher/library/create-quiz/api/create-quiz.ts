import { baseApi } from "@/shared/api";
import type { CreateQuizResponse, CreateQuizPayload } from "./create-quiz.types";

const createQuizApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		createQuiz: build.mutation<CreateQuizResponse, CreateQuizPayload>({
			query: (quizData) => ({
				url: "/quizzes",
				method: "POST",
				body: quizData,
			}),
			invalidatesTags: ["LibraryQuiz"]
		}),
	}),
});

export const { useCreateQuizMutation } = createQuizApi;
