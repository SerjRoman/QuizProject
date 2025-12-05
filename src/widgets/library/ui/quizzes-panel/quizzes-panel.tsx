import { useState } from "react";

import { CreateQuizModal } from "@/features/create-quiz";
import { EditAccessibilityModal } from "@/features/quiz-access";
import {
	QuizFilterByTagsBlock,
	QuizFilterBySubjectBlock,
	QuizFilterByLanguagesBlock,
} from "@/features/quiz-filters";
import { QuizSearch } from "@/features/quiz-search";
import { useLibraryQuizzes } from "@/entities/quiz";
import { useModal, useAppSelector } from "@/shared/lib";
import { Icons, MenuButton } from "@/shared/ui";
import { QuizActionsGroup } from "../quiz-actions-group";
import { QuizList } from "../quiz-list";
import styles from "./quizzes-panel.module.css";
import type { IQuizzesPanel } from "./quizzes-panel.types";

export function QuizzesPanel({ filters, queryArgs }: IQuizzesPanel) {
	const { user } = useAppSelector((state) => state.user);

	const [currentPage, setCurrentPage] = useState<number>(1);
	const [createModal, CreateQuizModalProvider] = useModal();
	const [editAccessModal, AccessModalProvider] = useModal<{
		quizId: string;
	}>();

	const { data, isLoading, error } = useLibraryQuizzes({
		page: currentPage,
		queryArgs,
	});

	return (
		<div className={styles.panel}>
			<aside className={styles.sidebar}>
				<MenuButton
					className={styles.button}
					title={"Create new quiz"}
					iconRight={<Icons.Plus />}
					enabled
					onClick={() => createModal.open()}
				/>
				<div className={styles.filters}>
					<QuizSearch />
					{filters}
					<QuizFilterByTagsBlock />
					<QuizFilterBySubjectBlock />
					<QuizFilterByLanguagesBlock />
				</div>
			</aside>
			<div className={styles.content}>
				<QuizList
					data={data}
					onPageChange={(page) => setCurrentPage(page)}
                    currentPage={currentPage}
					onEditAccess={(quizId: string) => {
						editAccessModal.open({ quizId });
					}}
					userId={user?.id}
					isLoading={isLoading}
					error={error}
					renderActions={(quiz) => (
						<QuizActionsGroup
							quiz={quiz}
							onEditAccess={() =>
								editAccessModal.open({ quizId: quiz.id })
							}
						/>
					)}
				/>
			</div>

			<CreateQuizModalProvider ModalComponent={CreateQuizModal} />
			<AccessModalProvider ModalComponent={EditAccessibilityModal} />
		</div>
	);
}
