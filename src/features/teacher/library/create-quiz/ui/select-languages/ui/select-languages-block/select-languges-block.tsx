import { clsx } from "clsx";
import { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import type { ICreateQuizFormData } from "@/widgets/library/ui/create-quiz/model";
import { useGetLanguagesQuery } from "@/features/teacher/library/quiz-filters";
import { useModal } from "@/shared/lib";
import { Checkbox, CheckboxGroup, FilterBlock } from "@/shared/ui";
import { ShowMoreModal } from "../../../show-more-modal";
import styles from "./select-languages-block.module.css";
export function SelectLanguagesBlock() {
	const { data: languages } = useGetLanguagesQuery();
	const [{ open }, ModalProvider] = useModal<{
		title: string;
		name: "languages";
	}>();

	const { watch } = useFormContext<ICreateQuizFormData>();
	const selectedLanguages = watch("languages");

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
								open();
							}}
						>
							Show more
						</p>
					) : undefined
				}
				title="Languages"
				className={styles.filterBlock}
			>
				<CheckboxGroup name={"languages"}>
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
			<ModalProvider
				ModalComponent={ShowMoreModal}
				customProps={{ title: "languages", name: "languages" }}
			>
				{languages?.map((language) => (
					<Checkbox
						key={language.id}
						value={language.id}
						label={language.name}
						labelClassName={clsx(styles.item, styles.language)}
					/>
				))}
			</ModalProvider>
		</>
	);
}
