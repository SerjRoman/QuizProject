import { clsx } from "clsx";
import { useMemo, type ChangeEvent, type ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import { useGetTagsQuery } from "@/shared/api";
import { useModal } from "@/shared/lib";
import { Checkbox, CheckboxGroup, FilterBlock } from "@/shared/ui";
import type { CreateQuizSchema } from "../../model";
import { ShowMoreModal } from "../show-more-modal";
import styles from "./select-tags-block.module.css";

export function SelectTagsBlock() {
	const fieldName = "tagIds";
	const { data } = useGetTagsQuery();
	const [{ open }, ModalProvider] = useModal<{
		title: string;
		name: typeof fieldName;
		content: (
			onChange: (e: ChangeEvent<HTMLInputElement>) => void,
			selectedItems: string | string[]
		) => ReactNode;
	}>();

	const { watch } = useFormContext<CreateQuizSchema>();
	const selectedTags = watch(fieldName);
	const tags = data?.data;

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
								open({
									title: "tags",
									name: fieldName,
									content: (onChange, selectedItems) => {
										return (
											<CheckboxGroup
												onChange={onChange}
												name={"tagIds"}
											>
												{tags?.map((tag) => (
													<Checkbox
														value={tag.id}
														labelClassName={clsx(
															styles.item,
															styles.tag
														)}
														key={tag.id}
														label={tag.name}
														checked={selectedItems.includes(
															tag.id
														)}
													/>
												))}
											</CheckboxGroup>
										);
									},
								});
							}}
						>
							Show more
						</p>
					) : undefined
				}
				title="Tags"
				className={styles.filterBlock}
			>
				<CheckboxGroup name={fieldName}>
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
			<ModalProvider ModalComponent={ShowMoreModal}></ModalProvider>
		</>
	);
}
