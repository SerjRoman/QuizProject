import { API_MAP, baseApi } from "@/shared/api";
import { QUIZZES_PER_PAGE } from "../model";
import { QUIZ_LIBRARY_MY_SELECT } from "./constants";
import type {
	CreateQuizPayload,
	CreateQuizResponse,
	DeleteQuizPayload,
	DeleteQuizResponse,
	QuizLibraryAllResponse,
	QuizLibraryAllResponseRaw,
	QuizLibraryRequest,
} from "./types";

export const quizLibraryApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getMyQuizzes: build.query<QuizLibraryAllResponse, QuizLibraryRequest>({
			providesTags: (result) =>
				result
					? [
							...result.data.map(({ id }) => ({
								type: "LibraryQuiz" as const,
								id,
							})),
							{ type: "LibraryQuiz", id: "LIST" },
					  ]
					: [{ type: "LibraryQuiz", id: "LIST" }],
			query: (arg) => {
				let query = `?select=${JSON.stringify(QUIZ_LIBRARY_MY_SELECT)}`;
				if (arg.filters) {
					query += `&tags=${JSON.stringify(arg.filters.tagsIds)}`;
					query += `&languages=${JSON.stringify(
						arg.filters.languagesIds
					)}`;
					query += `&subject=${arg.filters.subjectId}`;
				}
				if (arg.search) {
					query += `&search=${arg.search}`;
				}
				query += `&perPage=${QUIZZES_PER_PAGE}`;
				if (arg.page) {
					query += `&page=${arg.page}`;
				}
				if (arg.sort) {
					query += `&sort=${JSON.stringify(arg.sort)}`;
				}
				if (arg.visibility && arg.visibility.length > 0) {
					query += `&visibility=${JSON.stringify(arg.visibility)}`;
				}
				if (arg.status && arg.status.length > 0) {
					query += `&status=${JSON.stringify(arg.status)}`;
				}
				return {
					url: `${API_MAP.quiz.my}${
						arg.from ? `/${arg.from}` : ""
					}${query}`,
				};
			},
			transformResponse(
				baseQueryReturnValue: QuizLibraryAllResponseRaw
			): QuizLibraryAllResponse {
				return {
					meta: baseQueryReturnValue.meta,
					data: baseQueryReturnValue.data.map((quiz) => ({
						...quiz,
						createdAt: new Date(quiz.createdAt),
					})),
				};
			},
		}),
		deleteQuiz: build.mutation<DeleteQuizResponse, DeleteQuizPayload>({
			query: ({ id }) => ({
				url: `${API_MAP.quiz.delete}/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["LibraryQuiz"],
		}),
		createQuiz: build.mutation<CreateQuizResponse, CreateQuizPayload>({
			query: (quizData) => ({
				url: API_MAP.quiz.create,
				method: "POST",
				body: quizData,
			}),
			invalidatesTags: ["LibraryQuiz"],
		}),
	}),
});

export const {
	useLazyGetMyQuizzesQuery,
	useGetMyQuizzesQuery,
	useDeleteQuizMutation,
	useCreateQuizMutation,
} = quizLibraryApi;
