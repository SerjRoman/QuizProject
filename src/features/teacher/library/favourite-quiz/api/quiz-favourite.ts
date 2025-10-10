import { baseApi } from "@/shared/api";
import { QUIZ_FAVOURITE_API_MAP } from "./api-map";
import type { QuizFavouritePayload } from "./api.types";

const quizFavouriteApi = baseApi.injectEndpoints({
	endpoints: (build) => {
		return {
			addToFavourite: build.mutation<void, QuizFavouritePayload>({
				query: ({ id }) => ({
					url: QUIZ_FAVOURITE_API_MAP.addToFavourite(id),
					method: "PUT",
				}),
				invalidatesTags: (_, __, arg) => [
					{ type: "LibraryQuiz", id: arg.id },
				],
			}),
			removeFromFavourite: build.mutation<void, QuizFavouritePayload>({
				query: ({ id }) => ({
					url: QUIZ_FAVOURITE_API_MAP.removeFromFavourite(id),
					method: "DELETE",
				}),
				invalidatesTags: (_, __, arg) => [
					{ type: "LibraryQuiz", id: arg.id },
				],
			}),
		};
	},
});

export const { useAddToFavouriteMutation, useRemoveFromFavouriteMutation } =
	quizFavouriteApi;
