import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { TypedUseQueryStateResult } from "@reduxjs/toolkit/query/react";
import { createSelector } from "@reduxjs/toolkit/react";
import type { StateSchema } from "@shared/lib";
import type {
    QuizLibraryAllResponse,
    QuizLibraryRequest,
} from "../../api/types";

type GetAllQuizzesSelectFromResultArg = TypedUseQueryStateResult<
    QuizLibraryAllResponse,
    QuizLibraryRequest,
    BaseQueryFn
>;

export const selectFilteredQuizzes = createSelector(
    [
        (state: StateSchema) => state.quizFilters,
        (_, queryResult: GetAllQuizzesSelectFromResultArg) => queryResult,
    ],
    (libraryState, queryResult) => {
        const { search, filters, sort } = libraryState;
        let processedQuizzes = [...(queryResult.currentData?.data ?? [])];

        if (search) {
            const lowerCaseSearch = search.toLowerCase();
            processedQuizzes = processedQuizzes.filter((quiz) =>
                quiz.title.toLowerCase().includes(lowerCaseSearch)
            );
        }

        const { subjectId, tagIds, languageIds } = filters;
        const hasActiveFilters =
            subjectId || tagIds.length > 0 || languageIds.length > 0;
        if (hasActiveFilters) {
            processedQuizzes = processedQuizzes.filter((quiz) => {
                if (subjectId && quiz.subjectId !== subjectId) return false;
                if (
                    tagIds.length > 0 &&
                    !tagIds.some((id) => quiz.tagIds.includes(id))
                )
                    return false;
                if (
                    languageIds.length > 0 &&
                    !languageIds.some((id) => quiz.languageIds.includes(id))
                )
                    return false;
                return true;
            });
        }
        processedQuizzes.sort((a, b) => {
            const multiplier = sort.order === "asc" ? 1 : -1;
            if (sort.field === "title") {
                return a.title.localeCompare(b.title) * multiplier;
            }
            if (sort.field === "createdAt") {
                return (
                    new Date(a.createdAt).getTime() -
                    new Date(b.createdAt).getTime() * multiplier
                );
            }
            return 0;
        });

        return { queryResult, data: processedQuizzes };
    }
);
