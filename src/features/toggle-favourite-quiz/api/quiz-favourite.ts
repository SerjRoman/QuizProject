import { quizLibraryApi } from "@/entities/quiz";
import { baseApi } from "@/shared/api";
import type { StateSchema } from "@shared/lib";
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
				async onQueryStarted(
					{ id },
					{ dispatch, queryFulfilled, getState }
				) {
					const state = getState() as StateSchema;
					const quizQueries = baseApi.util.selectInvalidatedBy(
						state,
						["LibraryQuiz"]
					);

					const patchResults = [];

					for (const { endpointName, originalArgs } of quizQueries) {
						if (endpointName !== "getMyQuizzes") continue;
						const patchResult = dispatch(
							quizLibraryApi.util.updateQueryData(
								"getMyQuizzes",
								originalArgs,
								(draft) => {
									const quizToUpdate = draft.data.find(
										(quiz) => quiz.id === id
									);
									if (quizToUpdate) {
										quizToUpdate.isFavourite = true;
									}
								}
							)
						);
						patchResults.push(patchResult);
					}

					try {
						await queryFulfilled;
					} catch {
						patchResults.forEach((patch) => {
							patch.undo();
						});
					}
				},
				invalidatesTags: (_, __, arg) => [
					{ type: "LibraryQuiz", id: arg.id },
				],
			}),
			removeFromFavourite: build.mutation<void, QuizFavouritePayload>({
				query: ({ id }) => ({
					url: QUIZ_FAVOURITE_API_MAP.removeFromFavourite(id),
					method: "DELETE",
				}),

				async onQueryStarted(
					{ id },
					{ dispatch, queryFulfilled, getState }
				) {
					const state = getState() as StateSchema;
					const quizQueries = baseApi.util.selectInvalidatedBy(
						state,
						["LibraryQuiz"]
					);

					const patchResults = [];

					for (const { endpointName, originalArgs } of quizQueries) {
						if (endpointName !== "getMyQuizzes") continue;
						const patchResult = dispatch(
							quizLibraryApi.util.updateQueryData(
								"getMyQuizzes",
								originalArgs,
								(draft) => {
									const quizToUpdate = draft.data.find(
										(quiz) => quiz.id === id
									);
									if (quizToUpdate) {
										quizToUpdate.isFavourite = false;
									}
								}
							)
						);
						patchResults.push(patchResult);
					}

					try {
						await queryFulfilled;
					} catch {
						patchResults.forEach((patch) => {
							patch.undo();
						});
					}
				},

				invalidatesTags: (_, __, arg) => [
					{ type: "LibraryQuiz", id: arg.id },
				],
			}),
		};
	},
});

export const { useAddToFavouriteMutation, useRemoveFromFavouriteMutation } =
	quizFavouriteApi;
