import type { PaginationResponse } from "@/shared/lib";

export type TaxonomyResponse = {
	id: string;
	name: string;
	slug: string;
};
export type PaginatedTaxonomyResponse = PaginationResponse<TaxonomyResponse[]>;
