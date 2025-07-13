import type { SortOptions } from "../types";

export const SORT_OPTIONS: Record<SortOptions & "title", string>[] = [
	{
		title: "Activity name",
		type: "name",
	},
	{
		title: "Creation time",
		type: "date",
	},
];
