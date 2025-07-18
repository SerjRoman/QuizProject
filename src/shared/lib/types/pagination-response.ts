export type PaginationResponse<T> = {
	meta: {
		totalCount: number;
		currentPage: number;
		isFirstPage: boolean;
		isLastPage: boolean;
		pageCount: number;
	};
	data: T;
};
