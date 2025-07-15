import { baseApi } from "@/shared/api";
import { FILTER_BY_API_MAP } from "./constants";
import type { FilterByResponse } from "./types";

export const quizFilterByApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getTags: build.query<FilterByResponse[], void>({
			query: () => ({
				url: FILTER_BY_API_MAP.tags,
			}),
		}),
		getLanguages: build.query<FilterByResponse[], void>({
			query: () => ({
				url: FILTER_BY_API_MAP.languages,
			}),
		}),

		getSubject: build.query<FilterByResponse[], void>({
			query: () => ({
				url: FILTER_BY_API_MAP.subject,
			}),
		}),
	}),
});

export const { 
    useGetTagsQuery,
    useGetLanguagesQuery,
    useGetSubjectQuery
} = quizFilterByApi;
