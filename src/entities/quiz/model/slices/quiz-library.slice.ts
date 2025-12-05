import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
	OrderOptions,
	QuizStatus,
	QuizVisibility,
	SortOptions,
} from "../types";
interface QuizLibraryState {
	search: string;
	sort: {
		field: SortOptions;
		order: OrderOptions;
	};
	filters: {
		tagIds: string[];
		languageIds: string[];
		subjectId: string | null;
	};
	selectedVisibilities: QuizVisibility[];
	selectedStatuses: QuizStatus[];
}

const initialState: QuizLibraryState = {
	search: "",
	sort: {
		field: "createdAt",
		order: "desc",
	},
	filters: {
		tagIds: [],
		languageIds: [],
		subjectId: null,
	},
	selectedVisibilities: [],
	selectedStatuses: [],
};

export const quizFiltersSlice = createSlice({
	initialState,
	name: "quizFilters",
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
					tagIds?: string[];
					languageIds?: string[];
					subjectId?: string;
					selectedVisibilities?: QuizVisibility[];
					selectedStatuses?: QuizStatus[];
				};
			}>
		) => {
			state.filters = { ...state.filters, ...payload.filters };
		},
		addVisibility: (state, { payload }: PayloadAction<QuizVisibility>) => {
			if (state.selectedVisibilities.includes(payload)) return;
			state.selectedVisibilities = [
				...state.selectedVisibilities,
				payload,
			];
		},
		addStatus: (state, { payload }: PayloadAction<QuizStatus>) => {
			if (state.selectedStatuses.includes(payload)) return;
			state.selectedStatuses = [...state.selectedStatuses, payload];
		},
		removeVisibility(state, { payload }: PayloadAction<QuizVisibility>) {
			state.selectedVisibilities = state.selectedVisibilities.filter(
				(visibility) => visibility !== payload
			);
		},
		removeStatus(state, { payload }: PayloadAction<QuizStatus>) {
			state.selectedStatuses = state.selectedStatuses.filter(
				(status) => status !== payload
			);
		},
		clearFilters: (state) => {
			state.filters = { tagIds: [], languageIds: [], subjectId: "" };
			state.search = "";
			state.sort = {
				field: "createdAt",
				order: "desc",
			};
			state.selectedStatuses = [];
			state.selectedVisibilities = [];
		},
		addTag(state, { payload }: PayloadAction<string>) {
			if (state.filters.tagIds.includes(payload)) return;

			state.filters.tagIds = [...state.filters.tagIds, payload];
		},
		removeTag(state, { payload }: PayloadAction<string>) {
			state.filters.tagIds = state.filters.tagIds.filter(
				(tagId) => tagId !== payload
			);
		},
		addLanguage(state, { payload }: PayloadAction<string>) {
			if (state.filters.languageIds.includes(payload)) return;
			state.filters.languageIds = [...state.filters.languageIds, payload];
		},
		removeLanguage(state, { payload }: PayloadAction<string>) {
			state.filters.languageIds = state.filters.languageIds.filter(
				(languageId) => languageId !== payload
			);
		},
		setSubject(state, { payload }: PayloadAction<string>) {
			state.filters.subjectId = payload;
		},
		resetSubject(state) {
			state.filters.subjectId = null;
		},
	},
});

export const {
	setSort,
	setFilters,
	setSearch,
	clearFilters,
	addLanguage,
	addTag,
	removeLanguage,
	removeTag,
	setSubject,
	resetSubject,
	addStatus,
	addVisibility,
	removeStatus,
	removeVisibility,
} = quizFiltersSlice.actions;
