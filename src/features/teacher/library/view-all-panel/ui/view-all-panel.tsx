import { useState } from "react";
import { CreateQuizModal } from "@/features/create-quiz-modal";
import {
	QuizFilterByLanguagesBlock,
	QuizFilterBySubjectBlock,
	QuizFilterByTagsBlock,
	QuizSearch,
	SortQuizzesHeader,
} from "@/features/teacher";
import {
	QuizItem,
	selectFilteredQuizzes,
	useGetMyQuizzesQuery,
} from "@/entities/quiz";
import { useAppSelector } from "@/shared/lib";
import { Icons, MenuButton } from "@/shared/ui";

import styles from "./view-all-panel.module.css";

export function ViewAllPanel() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const state = useAppSelector((state) => state);
	const { data } = useGetMyQuizzesQuery(
		{},
		{
			selectFromResult: (queryResult) =>
				selectFilteredQuizzes(state, queryResult),
		}
	);
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
			<div>
				<SortQuizzesHeader />
				{data.map((quiz) => (
					<QuizItem
						key={quiz.id}
						quiz={{
							isFavourite: quiz.isFavourite,
							id: quiz.id,
							title: quiz.title,
							createdAt: quiz.createdAt,
							user: quiz.createdBy.user,
							coverImage: quiz.coverImage,
						}}
						actions={<></>}
					/>
				))}
			</div>
			<CreateQuizModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</div>
	);
}
