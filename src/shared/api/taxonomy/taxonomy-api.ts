import { API_MAP, baseApi } from "@/shared/api";
import type { PaginatedTaxonomyResponse } from "./taxonomy-api.types";

export const quizFilterByApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getTags: build.query<PaginatedTaxonomyResponse, void>({
			query: () => ({
				url: API_MAP.taxonomy.tags,
			}),
		}),
		getLanguages: build.query<PaginatedTaxonomyResponse, void>({
			query: () => ({
				url: API_MAP.taxonomy.languages,
			}),
		}),

		getSubjects: build.query<PaginatedTaxonomyResponse, void>({
			query: () => ({
				url: API_MAP.taxonomy.subjects,
			}),
		}),
	}),
});

export const { useGetTagsQuery, useGetLanguagesQuery, useGetSubjectsQuery } =
	quizFilterByApi;
