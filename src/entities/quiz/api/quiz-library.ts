import { baseApi } from "@/shared/api";
import { QUIZ_LIBRARY_MY_SELECT, QUIZ_LIBRARY_API_MAP } from "./constants";
import type {
	QuizLibraryRequest,
	QuizLibraryAllResponse,
	QuizLibraryFavourite,
} from "./types";
import type { QuizLibraryAllResponseRaw } from "./types/quiz-library-api";

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
				transformResponse(
					baseQueryReturnValue: QuizLibraryAllResponseRaw[]
				): QuizLibraryAllResponse[] {
					return baseQueryReturnValue.map((quiz) => ({
						...quiz,
						createdAt: new Date(quiz.createdAt),
					}));
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

export const {
	useLazyGetMyQuizzesQuery,
	useRemoveFromFavouriteMutation,
	useAddToFavouriteMutation,
	useGetMyQuizzesQuery,
} = quizLibraryApi;
