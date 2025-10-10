import { baseApi } from "@/shared/api";
import type { DeleteQuizPayload, DeleteQuizResponse } from "./api.types";

const deleteQuizApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		deleteQuiz: build.mutation<DeleteQuizResponse, DeleteQuizPayload>({
			query: ({ id }) => ({
				url: `/quizzes/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["LibraryQuiz"],
		}),
	}),
});

export const { useDeleteQuizMutation } = deleteQuizApi;
