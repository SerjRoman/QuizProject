import { baseApi } from "@/shared/api";
import { COPY_QUIZ_API_MAP } from "./api-map";
import type { CopyQuizPayload, CopyQuizResponse } from "./api.types";

const copyQuiz = baseApi.injectEndpoints({
	endpoints(build) {
		return {
			copyQuiz: build.mutation<CopyQuizResponse, CopyQuizPayload>({
				query: ({ id }) => ({
					url: COPY_QUIZ_API_MAP.copy,
					body: {
						id,
					},
					method: "POST",
				}),
				invalidatesTags: ["LibraryQuiz"],
			}),
		};
	},
});
export const { useCopyQuizMutation } = copyQuiz;
