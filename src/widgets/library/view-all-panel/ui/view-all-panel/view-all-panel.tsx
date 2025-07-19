<<<<<<<< HEAD:src/widgets/library/ui/view-all-panel/ui/view-all-panel.tsx
========
import { useState } from "react";
import { QuizContent } from "@/widgets/library";
import { CreateQuizModal } from "@/features/create-quiz-modal";
>>>>>>>> 63e25ab04e1d1e7cdcca1291bfd42591b12877b0:src/widgets/library/view-all-panel/ui/view-all-panel/view-all-panel.tsx
import {
	QuizFilterByLanguagesBlock,
	QuizFilterBySubjectBlock,
	QuizFilterByTagsBlock,
	QuizSearch,
} from "@/features/teacher";
<<<<<<<< HEAD:src/widgets/library/ui/view-all-panel/ui/view-all-panel.tsx
import {
	QuizItem,
	// selectFilteredQuizzes,
	useGetMyQuizzesQuery,
} from "@/entities/quiz";
import { useAppSelector, useDebounce, useModal } from "@/shared/lib";
========
import { useGetMyQuizzesQuery } from "@/entities/quiz";
import { useAppSelector, useDebounce } from "@/shared/lib";
>>>>>>>> 63e25ab04e1d1e7cdcca1291bfd42591b12877b0:src/widgets/library/view-all-panel/ui/view-all-panel/view-all-panel.tsx
import { Icons, MenuButton } from "@/shared/ui";
import { CreateQuizModal } from "../../create-quiz";
import styles from "./view-all-panel.module.css";

export function ViewAllPanel() {
<<<<<<<< HEAD:src/widgets/library/ui/view-all-panel/ui/view-all-panel.tsx
	const [{ open: openModal }, ModalWrapper] = useModal();
	const state = useAppSelector((state) => state);
	const debouncedSearch = useDebounce(state.quizLlibrary.search, 300);
	const { data } = useGetMyQuizzesQuery(
		{
			filters: { ...state.quizLlibrary.filters },
			search: debouncedSearch,
		},
		{
			// selectFromResult: (queryResult) =>
			// 	selectFilteredQuizzes(state, queryResult),
		}
	);
========
	const [currentPage, setCurrentPage] = useState<number>(1);
	const quizLlibrary = useAppSelector((state) => state.quizLlibrary);
	const debouncedSearch = useDebounce(quizLlibrary.search, 300);
	const { data, isLoading, error } = useGetMyQuizzesQuery({
		filters: { ...quizLlibrary.filters },
		search: debouncedSearch,
		page: currentPage,
		sort: quizLlibrary.sort,
	});

	const [isModalOpen, setIsModalOpen] = useState(false);

	const renderContent = () => {
		if (isLoading || !data) return <p>Loading...</p>;
		const displayQuizzes = data.data;
		const { meta } = data;
		if (error) return <p>{String(error)}</p>;
		if (meta.pageCount === 0) return <p>No quizzes found</p>;
		return (
			<QuizContent
				quizzes={displayQuizzes}
				meta={data.meta}
				onPageChange={setCurrentPage}
			/>
		);
	};
>>>>>>>> 63e25ab04e1d1e7cdcca1291bfd42591b12877b0:src/widgets/library/view-all-panel/ui/view-all-panel/view-all-panel.tsx
	return (
		<div className={styles.panel}>
			<div className={styles.sidebar}>
				<MenuButton
					className={styles.button}
					title={"Create new quiz"}
					iconRight={<Icons.Plus />}
					enabled
					onClick={openModal}
				/>
				<div className={styles.filters}>
					<QuizSearch />
					<QuizFilterByTagsBlock />
					<QuizFilterBySubjectBlock />
					<QuizFilterByLanguagesBlock />
				</div>
			</div>
			<div className={styles.content}>{renderContent()}</div>

			<ModalWrapper ModalComponent={CreateQuizModal} />
		</div>
	);
}
