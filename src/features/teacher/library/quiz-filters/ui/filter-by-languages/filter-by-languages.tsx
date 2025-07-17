import { useGetLanguagesQuery } from "@/features/quiz-filters/api";
import { setFilters } from "@/entities/quiz";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { FilterBlock } from "@/shared/ui";
import styles from "./filter-by-languages.module.css";

export function QuizFilterByLanguagesBlock() {
	const { data } = useGetLanguagesQuery();
	const dispatch = useAppDispatch();
	const filters = useAppSelector((state) => state.quizLlibrary.filters);
	return (
		<FilterBlock
			showMoreClassName={styles.showMore}
			className={styles.block}
			title="Languages"
		>
			{data?.map((language) => (
				<label className={styles.label}>
					{language.name}
					<input
						type="checkbox"
						className={styles.input}
						onChange={(event) => {
							if (event.target.checked) {
								dispatch(
									setFilters({
										filters: {
											languagesIds: [
												...filters.languagesIds,
												language.id,
											],
										},
									})
								);
							} else {
								dispatch(
									setFilters({
										filters: {
											languagesIds: [
												...filters.languagesIds.filter(
													(t) => t != language.id
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
