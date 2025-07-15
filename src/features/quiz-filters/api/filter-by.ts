import { baseApi } from "@/shared/api";
import { FILTER_BY_API_MAP } from "./constants";
import type { FilterByResponse } from "./types";

export const quizFilterByApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getTags: build.query<FilterByResponse[], void>({
			query: () => ({
				url:`${FILTER_BY_API_MAP.tags}?select=["id", "name", "slug"]`,
			}),
		}),
		getLanguages: build.query<FilterByResponse[], void>({
			query: () => ({
				url: `${FILTER_BY_API_MAP.languages}?select=["id", "name", "slug"]`,
			}),
		}),

		getSubjects: build.query<FilterByResponse[], void>({
			query: () => ({
				url: `${FILTER_BY_API_MAP.subjects}?select=["id", "name", "slug"]`,
			}),
		}),
	}),
});

export const { 
    useGetTagsQuery,
    useGetLanguagesQuery,
    useGetSubjectsQuery
} = quizFilterByApi;
