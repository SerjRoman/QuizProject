import { useState } from "react";
import { QuizContent } from "@/widgets/library";
import { CreateQuizModal } from "@/features/create-quiz-modal";
import {
	QuizFilterByLanguagesBlock,
	QuizFilterBySubjectBlock,
	QuizFilterByTagsBlock,
	QuizSearch,
} from "@/features/teacher";
import { useLibraryQuizzes } from "@/entities/quiz";
import { Icons, MenuButton } from "@/shared/ui";
import styles from "./quizzes-panel.module.css";
import type { IQuizzesPanel } from "./quizzes-panel.types";


export function QuizzesPanel({ filters, queryArgs }: IQuizzesPanel) {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { data, isLoading, error } = useLibraryQuizzes({
		page: currentPage,
		queryArgs,
	});

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
					{filters}
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
