import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { OrderOptions, SortOptions } from "../types";
interface IQuizLibraryState {
	search: string;
	sort: {
		field: SortOptions;
		order: OrderOptions;
	};
	filters: {
		tagsIds: string[];
		languagesIds: string[];
		subjectId: string;
	};
}

const initialState: IQuizLibraryState = {
	search: "",
	sort: {
		field: "createdAt",
		order: "desc",
	},
	filters: {
		tagsIds: [],
		languagesIds: [],
		subjectId: "",
	},
};

export const quizLibrarySlice = createSlice({
	initialState,
	name: "quizLlibrary",
	reducers: {
		setSort: (state, { payload }: PayloadAction<SortOptions>) => {
			const isSameField = state.sort.field === payload;

			if (isSameField) {
				state.sort.order = state.sort.order === "asc" ? "desc" : "asc";
			} else {
				state.sort.field = payload;
				state.sort.order = "desc";
			}
		},
		setSearch: (state, { payload }: PayloadAction<{ search: string }>) => {
			state.search = payload.search;
		},
		setFilters: (
			state,
			{
				payload,
			}: PayloadAction<{
				filters: {
					tagsIds?: string[];
					languagesIds?: string[];
					subjectId?: string;
				};
			}>
		) => {
			state.filters = { ...state.filters, ...payload.filters };
		},
	},
});

export const { setSort, setFilters, setSearch } = quizLibrarySlice.actions;
