import { baseApi } from "@/shared/api";
import { setQuizzes } from "../model/slices/quiz-library";
import type { QuizLibrary } from "../model/types";
import { QUIZ_LIBRARY_MY_SELECT, QUIZ_TEACHER_API_MAP } from "./constants";
import type {
	QuizLibraryRequest,
	QuizLibraryAllResponse,
} from "./types/quiz-library-api";

export const quizLibraryApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getMyQuizzes: build.query<QuizLibraryAllResponse[], QuizLibraryRequest>(
			{
				query: (arg) => ({
					url: `${QUIZ_TEACHER_API_MAP.my}${
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
	}),
});

export const { useLazyGetMyQuizzesQuery } = quizLibraryApi;
