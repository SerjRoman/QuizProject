import { useState } from "react";
import { QuizContent } from "@/widgets/library";
import { CreateQuizModal } from "@/features/create-quiz-modal";
import {
	QuizFilterByLanguagesBlock,
	QuizFilterBySubjectBlock,
	QuizFilterByTagsBlock,
	QuizSearch,
} from "@/features/teacher";
import { EditAccessibilityModal } from "@/features/teacher/library/accessibility-quiz";
import { QuizActionsGroup } from "@/features/teacher/library/quiz-actions";
import { QuizItem, useLibraryQuizzes } from "@/entities/quiz";
import { useModal, useAppSelector } from "@/shared/lib";
import { Icons, MenuButton } from "@/shared/ui";
import styles from "./quizzes-panel.module.css";
import type { IQuizzesPanel } from "./quizzes-panel.types";

export function QuizzesPanel({ filters, queryArgs }: IQuizzesPanel) {
	const { user } = useAppSelector((state) => state.user);

	const [currentPage, setCurrentPage] = useState<number>(1);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [{ open }, Modal] = useModal<{ quizId: string }>();

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
			<QuizContent meta={data.meta} onPageChange={setCurrentPage}>
				{displayQuizzes.map((quiz) => (
					<QuizItem
						key={quiz.id}
						quiz={quiz}
						actions={
							<QuizActionsGroup
								quiz={quiz}
								onEditAccessibility={open}
							/>
						}
						isMy={user?.id === quiz.createdBy.user.id}
					/>
				))}
			</QuizContent>
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

			<Modal ModalComponent={EditAccessibilityModal}></Modal>
			<CreateQuizModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</div>
	);
}
