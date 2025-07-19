import { useAppSelector, useDebounce } from "@/shared/lib";
import { useGetMyQuizzesQuery, type QuizLibraryRequest } from "../../api";

export function useLibraryQuizzes({
	page,
	queryArgs,
}: {
	page: number;
	queryArgs?: Partial<QuizLibraryRequest>;
}) {
	const quizLlibrary = useAppSelector((state) => state.quizLlibrary);
	const debouncedSearch = useDebounce(quizLlibrary.search, 300);
	const { data, isLoading, error } = useGetMyQuizzesQuery({
		...quizLlibrary.filters,
		search: debouncedSearch,
		page: page,
		sort: quizLlibrary.sort,
		...queryArgs,
	});

	return { data, isLoading, error };
}
