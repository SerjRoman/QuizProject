import { clsx } from "clsx";
import { useMemo, useState } from "react";
import { useGetTagsQuery } from "@/features/teacher/library/quiz-filters";
import { Checkbox, CheckboxGroup, FilterBlock } from "@/shared/ui";
// import { ShowMoreModal } from "../../../show-more-modal";
import { SelectTagsModal } from "../select-tags-modal";

export function SelectTagsBlock() {
	const { data: tags } = useGetTagsQuery();

	const [isFullOpenTags, setIsFullOpenTags] = useState<boolean>(false);

	const [isShowMoreTagsOpen, setIsShowMoreTagsOpen] = useState(false);

	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const topTags = useMemo(() => {
		if (!tags) return [];
		const uniqueTagIds = new Set(selectedTags);
		const selectedTagObjects = tags.filter((tag) =>
			selectedTags.includes(tag.id)
		);
		const restTags = tags.filter((tag) => !uniqueTagIds.has(tag.id));
		return [...selectedTagObjects, ...restTags].slice(0, 5);
	}, [tags, selectedTags]);

	// function handleAddTags(newTags: string[]) {
	// 	setSelectedTags(newTags);
	// 	setIsShowMoreTagsOpen(false);
	// }

	return (
		<>
			<FilterBlock
				actions={
					tags && tags.length > 5 ? (
						<p
							className={clsx(styles.showMore, styles.shMTag)}
							onClick={() => {
								setIsFullOpenTags(!isFullOpenTags);
								setIsShowMoreTagsOpen(!isShowMoreTagsOpen);
							}}
						>
							Show more
						</p>
					) : undefined
				}
				title="Tags"
				className={styles.filterBlock}
			>
				<CheckboxGroup name={"tags"}>
					{topTags.map((tag) => (
						<Checkbox
							value={tag.id}
							labelClassName={clsx(styles.item, styles.tag)}
							key={tag.id}
							label={tag.name}
						/>
					))}
				</CheckboxGroup>
			</FilterBlock>
			{tags && (
				<SelectTagsModal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
					onAdd={(newTags) => {
						setSelectedTags(newTags);
						setIsModalOpen(false);
					}}
					tags={tags}
					selectedTags={selectedTags}
				/>
			)}
		</>
	);
}
