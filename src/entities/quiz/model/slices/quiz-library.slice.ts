import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
	OrderOptions,
	QuizStatus,
	QuizVisibility,
	SortOptions,
} from "../types";
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
	visibility: QuizVisibility[];
	status: QuizStatus[];
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
	visibility: [],
	status: [],
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
					visibility?: QuizVisibility;
					status?: QuizStatus;
				};
			}>
		) => {
			state.filters = { ...state.filters, ...payload.filters };
		},
		setVisibility: (state, { payload }: PayloadAction<QuizVisibility>) => {
			if (state.visibility.includes(payload)) {
				state.visibility = state.visibility.filter((v) => v != payload);
			} else {
				state.visibility = [...state.visibility, payload];
			}
		},
		setStatus: (state, { payload }: PayloadAction<QuizStatus>) => {
			if (state.status.includes(payload)) {
				state.status = state.status.filter((s) => s != payload);
			} else {
				state.status = [...state.status, payload];
			}
		},
		clearFilters: (state) => {
			state.filters = { tagsIds: [], languagesIds: [], subjectId: "" };
			state.search = "";
			state.sort = {
				field: "createdAt",
				order: "desc",
			};
			state.status = [];
			state.visibility = [];
		},
	},
});

export const {
	setSort,
	setFilters,
	setSearch,
	setVisibility,
	setStatus,
	clearFilters,
} = quizLibrarySlice.actions;
