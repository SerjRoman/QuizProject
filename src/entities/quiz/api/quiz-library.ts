import { baseApi } from "@/shared/api";
import { setQuizzes } from "../model/slices/quiz-library";
import type { QuizLibrary } from "../model/types";
import { QUIZ_LIBRARY_MY_SELECT, QUIZ_LIBRARY_API_MAP } from "./constants";
import type {
	QuizLibraryRequest,
	QuizLibraryAllResponse,
	QuizLibraryFavourite,
} from "./types";

export const quizLibraryApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getMyQuizzes: build.query<QuizLibraryAllResponse[], QuizLibraryRequest>(
			{
				providesTags: (result) =>
					result
						? [
								...result.map(({ id }) => ({
									type: "LibraryQuiz" as const,
									id,
								})),
								{ type: "LibraryQuiz", id: "LIST" },
						  ]
						: [{ type: "LibraryQuiz", id: "LIST" }],
				query: (arg) => ({
					url: `${QUIZ_LIBRARY_API_MAP.my}${
						arg.from ? `/${arg.from}` : ""
					}?select=${JSON.stringify(QUIZ_LIBRARY_MY_SELECT)}`,
				}),
				onQueryStarted: async function (
					arg,
					{ queryFulfilled, dispatch }
				) {
					try {
						const { data } = await queryFulfilled;
						const quizzesWithFavourite: QuizLibrary[] = data.map(
							(quiz) => {
								return {
									...quiz,
									createdAt: new Date(quiz.createdAt),
									isFavourite: quiz.favouritedByIds.includes(
										arg.userId
									),
								};
							}
						);
						dispatch(setQuizzes(quizzesWithFavourite));
					} catch (error) {
						console.error(error);
					}
				},
			}
		),
		addToFavourite: build.mutation<void, QuizLibraryFavourite>({
			query: ({ id }) => ({
				url: QUIZ_LIBRARY_API_MAP.favourite(id),
				method: "PUT",
			}),
			invalidatesTags: (_, __, arg) => [
				{ type: "LibraryQuiz", id: arg.id },
			],
		}),
		removeFromFavourite: build.mutation<void, QuizLibraryFavourite>({
			query: ({ id }) => ({
				url: QUIZ_LIBRARY_API_MAP.favourite(id),
				method: "DELETE",
			}),
			invalidatesTags: (_, __, arg) => [
				{ type: "LibraryQuiz", id: arg.id },
			],
		}),
	}),
});

export const { useLazyGetMyQuizzesQuery, useRemoveFromFavouriteMutation, useAddToFavouriteMutation } = quizLibraryApi;
