import { useState, type ChangeEvent } from "react";
import { useGetTagsQuery } from "@/features/teacher";
import { setFilters } from "@/entities/quiz";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { Checkbox, CheckboxGroup, FilterBlock } from "@/shared/ui";
import styles from "./filter-by-tags.module.css";

export function QuizFilterByTagsBlock() {
	const { data = [] } = useGetTagsQuery();
	const dispatch = useAppDispatch();
	const filters = useAppSelector((state) => state.quizLlibrary.filters);
	const [isFullOpen, setIsFullOpen] = useState<boolean>(false);

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		if (event.target.checked) {
			dispatch(
				setFilters({
					filters: {
						tagsIds: [...filters.tagsIds, event.target.value],
					},
				})
			);
		} else {
			dispatch(
				setFilters({
					filters: {
						tagsIds: [
							...filters.tagsIds.filter(
								(t) => t != event.target.value
							),
						],
					},
				})
			);
		}
	}

	return (
		<FilterBlock
			actions={
				data.length > 10 ? (
					<p
						className={styles.actionsBlock}
						onClick={() => {
							setIsFullOpen(!isFullOpen);
						}}
					>
						{isFullOpen ? "Show less" : "Show more"}
					</p>
				) : undefined
			}
			title="Tags"
			className={styles.block}
		>
			<CheckboxGroup onChange={handleChange} name="tags">
				{data.slice(0, isFullOpen ? undefined : 10).map((tag) => (
					<Checkbox
						key={tag.id}
						label={tag.name}
						labelClassName={styles.label}
						className={styles.input}
						value={tag.id}
					/>
				))}
			</CheckboxGroup>
		</FilterBlock>
	);
}
