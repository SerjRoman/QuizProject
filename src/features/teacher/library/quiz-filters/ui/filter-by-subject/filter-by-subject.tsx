import { useGetSubjectsQuery } from "@/features/quiz-filters/api";
import { setFilters } from "@/entities/quiz";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { FilterBlock } from "@/shared/ui";
import styles from "./filter-by-subject.module.css";

export function QuizFilterBySubjectBlock() {
	const { data } = useGetSubjectsQuery();
	const dispatch = useAppDispatch();
	const filters = useAppSelector((state) => state.quizLlibrary.filters);
	return (
		<FilterBlock
			showMoreClassName={styles.showMore}
			className={styles.block}
			title="Subject"
		>
			{data?.map((subject) => (
				<label className={styles.label}>
					{subject.name}
					<input
						type="checkbox"
						className={styles.input}
						checked={subject.id === filters.subjectId}
						onChange={(event) => {
							dispatch(
								setFilters({
									filters: {
										subjectId: event.target.checked ? subject.id : ""
									},
								})
							);
						}}
					/>
				</label>
			))}
		</FilterBlock>
	);
}
