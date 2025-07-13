import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { SORT_OPTIONS } from "../constants";
import type { QuizLibrary, SortOptions } from "../types";

interface IQuizLibraryState {
	quizzes: QuizLibrary[];
	filteredQuizzes: QuizLibrary[];
	search: string;
	sort: typeof SORT_OPTIONS;
}

const initialState: IQuizLibraryState = {
	quizzes: [],
	filteredQuizzes: [],
	search: "",
	sort: {
		date: { order: "desc" },
		name: { order: "desc" },
	},
};

export const quizLibrarySlice = createSlice({
	initialState,
	name: "quizLlibrary",
	reducers: {
		search: (state, { payload }: PayloadAction<{ search?: string }>) => {
			if (!payload.search) return;
			const search = payload.search.toLowerCase();
			state.search = search;
			state.filteredQuizzes = state.quizzes.filter((quiz) =>
				quiz.title.includes(search)
			);
		},
		sort: (state, { payload }: PayloadAction<SortOptions>) => {
			const field = payload;
			const currentOrder = state.sort[field].order;

			const newOrder = currentOrder === "asc" ? "desc" : "asc";
			state.sort[field] = { order: newOrder };

			const sortMultiplier = newOrder === "asc" ? 1 : -1;

			state.filteredQuizzes.sort((a, b) => {
				let comparison = 0;

				if (field === "name") {
					comparison = a.title.localeCompare(b.title);
				} else if (field === "date") {
					const dateA = new Date(a.createdAt).getTime();
					const dateB = new Date(b.createdAt).getTime();
					comparison = dateA - dateB;
				}

				return comparison * sortMultiplier;
			});
		},
		setQuizzes: (state, { payload }: PayloadAction<QuizLibrary[]>) => {
			state.quizzes = payload;
			state.filteredQuizzes = payload;
		},
	},
});

export const { search, sort, setQuizzes } = quizLibrarySlice.actions;
