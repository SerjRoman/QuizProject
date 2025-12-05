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
        subjectId: string;
    };
    visibility: QuizVisibility[];
    status: QuizStatus[];
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
        subjectId: "",
    },
    visibility: [],
    status: [],
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
            state.filters = { tagIds: [], languageIds: [], subjectId: "" };
            state.search = "";
            state.sort = {
                field: "createdAt",
                order: "desc",
            };
            state.status = [];
            state.visibility = [];
        },
        addTag(state, { payload }: PayloadAction<string>) {
            state.filters.tagIds = [...state.filters.tagIds, payload];
        },
        removeTag(state, { payload }: PayloadAction<string>) {
            state.filters.tagIds = state.filters.tagIds.filter(
                (tagId) => tagId !== payload
            );
        },
        addLanguage(state, { payload }: PayloadAction<string>) {
            state.filters.languageIds = [
                ...state.filters.languageIds,
                payload,
            ];
        },
        removeLanguage(state, { payload }: PayloadAction<string>) {
            state.filters.languageIds = state.filters.languageIds.filter(
                (languageId) => languageId !== payload
            );
        },
        setSubject(state, { payload }: PayloadAction<string>) {
            state.filters.subjectId = payload;
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
    addLanguage,
    addTag,
    removeLanguage,
    removeTag,
    setSubject,
} = quizFiltersSlice.actions;
