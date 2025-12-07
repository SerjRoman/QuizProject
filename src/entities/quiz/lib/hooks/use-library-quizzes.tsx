import { useAppSelector, useDebounce } from "@/shared/lib";
import { useGetMyQuizzesQuery, type QuizLibraryRequest } from "../../api";

export function useLibraryQuizzes({
	page,
	queryArgs,
}: {
	page: number;
	queryArgs?: Partial<QuizLibraryRequest>;
}) {
	const quizFilters = useAppSelector((state) => state.quizFilters);
	const debouncedSearch = useDebounce(quizFilters.search, 300);
	const request = useGetMyQuizzesQuery(
		{
			filters: quizFilters.filters,
			search: debouncedSearch,
			page: page,
			sort: quizFilters.sort,
			selectedVisiblities: quizFilters.selectedVisibilities,
			selectedStatuses: quizFilters.selectedStatuses,
			...queryArgs,
		},
		{
			refetchOnMountOrArgChange: true,
		}
	);

	return request;
}
