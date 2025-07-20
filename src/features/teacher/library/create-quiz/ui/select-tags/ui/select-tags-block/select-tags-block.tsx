import { clsx } from "clsx";
import { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import type { ICreateQuizFormData } from "@/features/teacher";
import { useGetTagsQuery } from "@/features/teacher";
import { useModal } from "@/shared/lib";
import { Checkbox, CheckboxGroup, FilterBlock } from "@/shared/ui";
import { ShowMoreModal } from "../../../show-more-modal";
import styles from "./select-tags-block.module.css"

export function SelectTagsBlock() {
	const { data: tags } = useGetTagsQuery();
	const [{ open }, ModalProvider] = useModal<{
		title: string;
		name: "tags";
	}>();

	const { watch } = useFormContext<ICreateQuizFormData>();
	const selectedTags = watch("tags");

	const topTags = useMemo(() => {
		if (!tags) return [];
		const selectedSet = new Set(selectedTags);
		const selectedTagObjs = tags.filter((t) => selectedSet.has(t.id));
		const rest = tags.filter((t) => !selectedSet.has(t.id));
		return [...selectedTagObjs, ...rest].slice(0, 5);
	}, [tags, selectedTags]);
	return (
		<>
			<FilterBlock
				actions={
					tags && tags.length > 5 ? (
						<p
							className={clsx(styles.showMore, styles.shMTag)}
							onClick={() => {
								open();
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
			<ModalProvider
				ModalComponent={ShowMoreModal}
				customProps={{ title: "tags", name: "tags" }}
			>
				{tags?.map((tag) => (
					<Checkbox
						value={tag.id}
						labelClassName={clsx(styles.item, styles.tag)}
						key={tag.id}
						label={tag.name}
					/>
				))}
			</ModalProvider>
		</>
	);
}
