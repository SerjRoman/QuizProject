import { useState } from "react";
import { QuizContent } from "@/widgets/library";
import { CreateQuizModal } from "@/features/create-quiz-modal";
import {
	QuizFilterByLanguagesBlock,
	QuizFilterBySubjectBlock,
	QuizFilterByTagsBlock,
	QuizSearch,
} from "@/features/teacher";
import { useGetMyQuizzesQuery } from "@/entities/quiz";
import { useAppSelector, useDebounce } from "@/shared/lib";
import { Icons, MenuButton } from "@/shared/ui";

import styles from "./view-all-panel.module.css";

export function ViewAllPanel() {
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
	return (
		<div className={styles.panel}>
			<div className={styles.sidebar}>
				<MenuButton
					className={styles.button}
					title={"Create new quiz"}
					iconRight={<Icons.Plus />}
					enabled
					onClick={() => setIsModalOpen(true)}
				/>
				<div className={styles.filters}>
					<QuizSearch />
					<QuizFilterByTagsBlock />
					<QuizFilterBySubjectBlock />
					<QuizFilterByLanguagesBlock />
				</div>
			</div>
			<div className={styles.content}>{renderContent()}</div>

			<CreateQuizModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</div>
	);
}
