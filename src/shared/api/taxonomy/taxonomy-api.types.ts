import type { PaginationResponse } from "@/shared/lib";

export type FilterByResponse = {
	id: string;
	name: string;
	slug: string;
};
export type PaginatedTaxonomyResponse = PaginationResponse<FilterByResponse[]>;
