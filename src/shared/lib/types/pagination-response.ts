export type PaginationResponse<T> = {
	meta: PaginationData;
	data: T;
};

export type PaginationData = {
	total: number;
	totalPages: number;
	page: number;
	perPage: number;
};
