import { API_MAP, baseApi } from "@/shared/api";
import { QUIZZES_PER_PAGE } from "../model";
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
				let query = `?`;
				if (arg.filters) {
					const { tagIds, languageIds, subjectId } = arg.filters;
					if (tagIds && tagIds.length > 0)
						query += `&tagIds=${arg.filters.tagIds.join(
							"&tagIds="
						)}`;
					if (languageIds && languageIds.length > 0)
						query += `&languageIds=${arg.filters.languageIds.join(
							"&languageIds="
						)}`;
					if (subjectId)
						query += `&subjectId=${arg.filters.subjectId}`;
				}
				if (arg.search) {
					query += `&search=${arg.search}`;
				}
				query += `&perPage=${QUIZZES_PER_PAGE}`;
				if (arg.page) {
					query += `&page=${arg.page}`;
				}
				if (arg.sort) {
					query += `&order=${arg.sort.field}:${arg.sort.order}`;
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
