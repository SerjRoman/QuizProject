import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { QuizLibrary, SortOptions } from "../types";

interface IQuizLibraryState {
	quizzes: QuizLibrary[];
	filteredQuizzes: QuizLibrary[];
	filter: {
		search: string;
		sort: SortOptions;
	};
}

const initialState: IQuizLibraryState = {
	quizzes: [],
	filteredQuizzes: [],
	filter: {
		search: "",
		sort: "date",
	},
};

export const quizLibrarySlice = createSlice({
	initialState,
	name: "quizLlibrary",
	reducers: {
		filter: (
			state,
			{ payload }: PayloadAction<{ search?: string; sort?: SortOptions }>
		) => {
			if (!payload.search && !payload.sort) return;
			if (typeof payload.search === "string") {
				const search = payload.search.toLowerCase();
				state.filter.search = search;
				state.filteredQuizzes = state.quizzes.filter((quiz) =>
					quiz.title.includes(search)
				);
			}
			if (typeof payload.sort === "string") {
				state.filteredQuizzes = state.quizzes.sort((q1, q2) => {
					if (q1 > q2) return 1;
					else if (q1 < q2) return -1;
					else return 0;
				});
			}
		},
		setQuizzes: (state, { payload }: PayloadAction<QuizLibrary[]>) => {
			state.quizzes = payload;
		},
	},
});

export const { filter, setQuizzes } = quizLibrarySlice.actions;
