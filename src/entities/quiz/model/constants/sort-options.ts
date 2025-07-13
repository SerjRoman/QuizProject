import type { OrderOptions, SortOptions } from "../types";

export const SORT_OPTIONS: Record<
	SortOptions,
	Record<"order", OrderOptions>
> = {
	date: {
		order: "desc",
	},
	name: {
		order: "desc",
	},
};

export const ORDER_OPTIONS = ["desc", "asc"];
