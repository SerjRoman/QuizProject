export type PaginationResponse<T> = {
	meta: PaginationData;
	data: T;
};

export type PaginationData = {
	totalCount: number;
	currentPage: number;
	isFirstPage: boolean;
	isLastPage: boolean;
	pageCount: number;
};
