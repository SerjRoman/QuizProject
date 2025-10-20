import { useState, type ChangeEvent } from "react";
import { useGetTagsQuery } from "@/features/teacher";
import { addTag, removeTag } from "@/entities/quiz";
import { useAppDispatch } from "@/shared/lib";
import { Checkbox, CheckboxGroup, FilterBlock } from "@/shared/ui";
import styles from "./filter-by-tags.module.css";

export function QuizFilterByTagsBlock() {
	const { data = [] } = useGetTagsQuery();
	const dispatch = useAppDispatch();
	const [isFullOpen, setIsFullOpen] = useState<boolean>(false);

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		const tag = event.target.value;
		if (event.target.checked) {
			dispatch(addTag(tag));
		} else {
			dispatch(removeTag(tag));
		}
	}

	return (
		<FilterBlock
			actions={
				data.length > 10 && (
					<p
						className={styles.showMore}
						onClick={() => {
							setIsFullOpen(!isFullOpen);
						}}
					>
						{isFullOpen ? "Show less" : "Show more"}
					</p>
				)
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
