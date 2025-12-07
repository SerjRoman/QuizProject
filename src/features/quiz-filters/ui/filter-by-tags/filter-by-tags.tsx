import { useState, type ChangeEvent } from "react";
import { addTag, removeTag } from "@/entities/quiz";
import { useGetTagsQuery } from "@/shared/api";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { Checkbox, CheckboxGroup, FilterBlock } from "@/shared/ui";
import { FilterChip } from "../components";
import styles from "./filter-by-tags.module.css";

export function QuizFilterByTagsBlock() {
	const { data } = useGetTagsQuery();
	const dispatch = useAppDispatch();
	const [isFullOpen, setIsFullOpen] = useState<boolean>(false);
	const {
		filters: { tagIds },
	} = useAppSelector((state) => state.quizFilters);

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		const tag = event.target.value;
		if (event.target.checked) {
			dispatch(addTag(tag));
		} else {
			dispatch(removeTag(tag));
		}
	}
	if (!data) return "Loading";
	const tags = data.data;

	return (
		<FilterBlock
			actions={
				tags.length > 10 && (
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
				{tags.slice(0, isFullOpen ? undefined : 10).map((tag) => {
					const isSelected = tagIds.includes(tag.id);
					return (
						<Checkbox
							key={tag.id}
							label={
								<FilterChip
									isActive={isSelected}
									label={tag.name}
									variant={"green"}
								/>
							}
							className={styles.input}
							value={tag.id}
						/>
					);
				})}
			</CheckboxGroup>
		</FilterBlock>
	);
}
