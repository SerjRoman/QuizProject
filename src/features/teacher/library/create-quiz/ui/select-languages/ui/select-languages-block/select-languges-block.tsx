import { clsx } from "clsx";
import { useMemo, useState } from "react";
import { useGetLanguagesQuery } from "@/features/teacher/library/quiz-filters";
import { Checkbox, CheckboxGroup, FilterBlock } from "@/shared/ui";
import { SelectLanguagesModal } from "../select-languages-modal";

export function SelectLanguagesBlock() {
	const { data: languages } = useGetLanguagesQuery();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

	const topLanguages = useMemo(() => {
		if (!languages) return [];
		const selectedSet = new Set(selectedLanguages);
		const selectedObjs = languages.filter((l) =>
			selectedLanguages.includes(l.id)
		);
		const rest = languages.filter((l) => !selectedSet.has(l.id));
		return [...selectedObjs, ...rest].slice(0, 5);
	}, [languages, selectedLanguages]);

	const [isShowMoreLanguagesOpen, setIsShowMoreLanguagesOpen] =
		useState(false);
	const [isFullOpenLanguages, setIsFullOpenLanguages] =
		useState<boolean>(false);

	return (
		<>
			<FilterBlock
				actions={
					languages && languages.length > 5 ? (
						<p
							className={clsx(styles.showMore, styles.shMLan)}
							onClick={() => {
								setIsFullOpenLanguages(!isFullOpenLanguages);
								setIsShowMoreLanguagesOpen(
									!isShowMoreLanguagesOpen
								);
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
			{languages && (
				<SelectLanguagesModal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
					onAdd={(newSelected) => {
						setSelectedLanguages(newSelected);
						setIsModalOpen(false);
					}}
					languages={languages}
					selectedLanguages={selectedLanguages}
				/>
			)}
		</>
	);
}
