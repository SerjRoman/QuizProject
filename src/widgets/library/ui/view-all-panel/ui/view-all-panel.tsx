import {
	QuizFilterByLanguagesBlock,
	QuizFilterBySubjectBlock,
	QuizFilterByTagsBlock,
	QuizSearch,
	SortQuizzesHeader,
} from "@/features/teacher";
import {
	QuizItem,
	// selectFilteredQuizzes,
	useGetMyQuizzesQuery,
} from "@/entities/quiz";
import { useAppSelector, useDebounce } from "@/shared/lib";
import { Icons, MenuButton } from "@/shared/ui";
import { CreateQuizModal } from "../../create-quiz";
import styles from "./view-all-panel.module.css";

export function ViewAllPanel() {
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
			<div className={styles.content}>
				<SortQuizzesHeader />
				<div className={styles.quizzesList}>
					{data?.map((quiz) => (
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
			</div>

			<CreateQuizModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</div>
	);
}
