import { API_MAP, baseApi } from "@/shared/api";
import type { CopyQuizPayload, CopyQuizResponse } from "./api.types";

const copyQuiz = baseApi.injectEndpoints({
	endpoints(build) {
		return {
			copyQuiz: build.mutation<CopyQuizResponse, CopyQuizPayload>({
				query: (body) => ({
					url: API_MAP.quiz.copy,
					body,
					method: "POST",
				}),
				invalidatesTags: ["LibraryQuiz"],
			}),
		};
	},
});
export const { useCopyQuizMutation } = copyQuiz;
