import { useGetTagsQuery } from "@/features/quiz-filters/api";
import { setFilters } from "@/entities/quiz";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { FilterBlock } from "@/shared/ui";
import styles from "./filter-by-tags.module.css";

export function QuizFilterByTagsBlock() {
	const { data } = useGetTagsQuery();
	const dispatch = useAppDispatch();
	const filters = useAppSelector((state) => state.quizLlibrary.filters);
	return (
		<FilterBlock
			showMoreClassName={styles.showMore}
			title="Tags"
			className={styles.block}
		>
			{data?.map((tag) => (
				<label className={styles.label}>
					{tag.name}
					<input
						type="checkbox"
						className={styles.input}
						onChange={(event) => {
							if (event.target.checked) {
								dispatch(
									setFilters({
										filters: {
											tagsIds: [
												...filters.tagsIds,
												tag.id,
											],
										},
									})
								);
							} else {
								dispatch(
									setFilters({
										filters: {
											tagsIds: [
												...filters.tagsIds.filter(
													(t) => t != tag.id
												),
											],
										},
									})
								);
							}
						}}
					/>
				</label>
			))}
		</FilterBlock>
	);
}
