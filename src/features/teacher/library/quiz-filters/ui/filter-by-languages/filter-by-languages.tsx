import { useState, type ChangeEvent } from "react";
import { useGetLanguagesQuery } from "@features/teacher";
import { setFilters } from "@/entities/quiz";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { Checkbox, CheckboxGroup, FilterBlock } from "@/shared/ui";
import styles from "./filter-by-languages.module.css";

export function QuizFilterByLanguagesBlock() {
	const { data=[] } = useGetLanguagesQuery();
	const dispatch = useAppDispatch();
	const filters = useAppSelector((state) => state.quizLlibrary.filters);
	const [isFullOpen, setIsFullOpen] = useState<boolean>(false);
	function handleChangeLanguage(event: ChangeEvent<HTMLInputElement>) {
		if (event.target.checked) {
			dispatch(
				setFilters({
					filters: {
						languagesIds: [
							...filters.languagesIds,
							event.target.value,
						],
					},
				})
			);
		} else {
			dispatch(
				setFilters({
					filters: {
						languagesIds: [
							...filters.languagesIds.filter(
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
				data && data.length > 10 ? (
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
			className={styles.block}
			title="Languages"
		>
			<CheckboxGroup onChange={handleChangeLanguage} name="languages">
				{data.slice(0, isFullOpen ? undefined : 10).map((language) => (
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
