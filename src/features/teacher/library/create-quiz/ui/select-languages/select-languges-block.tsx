import { clsx } from "clsx";
import { useMemo, type ChangeEvent, type ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import { useGetLanguagesQuery } from "@/features/teacher";
import { useModal } from "@/shared/lib";
import { Checkbox, CheckboxGroup, FilterBlock } from "@/shared/ui";
import type { CreateQuizSchema } from "../../model";
import { ShowMoreModal } from "../show-more-modal";
import styles from "./select-languages-block.module.css";
export function SelectLanguagesBlock() {
	const { data: languages } = useGetLanguagesQuery();
	const [{ open }, ModalProvider] = useModal<{
		title: string;
		name: "languagesIds";
		content: (
			onChange: (e: ChangeEvent<HTMLInputElement>) => void,
			selectedItems: string | string[]
		) => ReactNode;
	}>();

	const { watch } = useFormContext<CreateQuizSchema>();
	const selectedLanguages = watch("languagesIds");

	const topLanguages = useMemo(() => {
		if (!languages) return [];
		const selectedSet = new Set(selectedLanguages);

		const selectedObjs = languages.filter((l) => selectedSet.has(l.id));
		const rest = languages.filter((l) => !selectedSet.has(l.id));
		return [...selectedObjs, ...rest].slice(0, 5);
	}, [selectedLanguages, languages]);

	return (
		<>
			<FilterBlock
				actions={
					languages && languages.length > 5 ? (
						<p
							className={clsx(styles.showMore, styles.shMLan)}
							onClick={() => {
								open({
									title: "languages",
									name: "languagesIds",
									content: (onChange, selectedItems) => {
										return (
											<CheckboxGroup
												onChange={onChange}
												name={"languagesIds"}
											>
												{languages?.map((language) => (
													<Checkbox
														key={language.id}
														value={language.id}
														label={language.name}
														labelClassName={clsx(
															styles.item,
															styles.language
														)}
														checked={selectedItems.includes(
															language.id
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
				title="Languages"
				className={styles.filterBlock}
			>
				<CheckboxGroup name={"languagesIds"}>
					{topLanguages.map((language) => (
						<Checkbox
							value={language.id}
							key={language.id}
							label={language.name}
							labelClassName={clsx(styles.item, styles.language)}
						/>
					))}
				</CheckboxGroup>
			</FilterBlock>
			<ModalProvider ModalComponent={ShowMoreModal}></ModalProvider>
		</>
	);
}
