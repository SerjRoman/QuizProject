import { API_MAP, baseApi } from "@/shared/api";
import type { FilterByResponse } from "./taxonomy-api.types";

export const quizFilterByApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getTags: build.query<FilterByResponse[], void>({
			query: () => ({
				url: `${API_MAP.tags}?select=["id", "name", "slug"]`,
			}),
		}),
		getLanguages: build.query<FilterByResponse[], void>({
			query: () => ({
				url: `${API_MAP.languages}?select=["id", "name", "slug"]`,
			}),
		}),

		getSubjects: build.query<FilterByResponse[], void>({
			query: () => ({
				url: `${API_MAP.subjects}?select=["id", "name", "slug"]`,
			}),
		}),
	}),
});

export const { useGetTagsQuery, useGetLanguagesQuery, useGetSubjectsQuery } =
	quizFilterByApi;
