import { useState, type ChangeEvent } from "react";
import { addLanguage, removeLanguage } from "@/entities/quiz";
import { useGetLanguagesQuery } from "@/shared/api";
import { useAppDispatch } from "@/shared/lib";
import { Checkbox, CheckboxGroup, FilterBlock } from "@/shared/ui";
import styles from "./filter-by-languages.module.css";

export function QuizFilterByLanguagesBlock() {
	const { data } = useGetLanguagesQuery();
	const dispatch = useAppDispatch();
	const [isFullOpen, setIsFullOpen] = useState<boolean>(false);
	function handleChangeLanguage(event: ChangeEvent<HTMLInputElement>) {
		const languageId = event.target.value;
		if (event.target.checked) {
			dispatch(addLanguage(languageId));
		} else {
			dispatch(removeLanguage(languageId));
		}
	}
	if (!data) return "Loading";
	const languages = data.data;
	return (
		<FilterBlock
			actions={
				languages &&
				languages.length > 10 && (
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
			className={styles.block}
			title="Languages"
		>
			<CheckboxGroup onChange={handleChangeLanguage} name="languages">
				{languages
					.slice(0, isFullOpen ? undefined : 10)
					.map((language) => (
						<Checkbox
							key={language.id}
							label={language.name}
							labelClassName={styles.label}
							value={language.id}
						/>
					))}
			</CheckboxGroup>
		</FilterBlock>
	);
}
