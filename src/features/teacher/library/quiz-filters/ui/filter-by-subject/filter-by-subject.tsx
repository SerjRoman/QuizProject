import { useState } from "react";
import { useGetSubjectsQuery } from "@/features/teacher";
import { setFilters } from "@/entities/quiz";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { Checkbox, CheckboxGroup, FilterBlock } from "@/shared/ui";
import styles from "./filter-by-subject.module.css";

export function QuizFilterBySubjectBlock() {
	const { data = [] } = useGetSubjectsQuery();
	const dispatch = useAppDispatch();
	const filters = useAppSelector((state) => state.quizLlibrary.filters);
	const [isFullOpen, setIsFullOpen] = useState<boolean>(false);

	return (
		<FilterBlock
			actions={
				data.length > 10 ? (
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
			title="Subject"
		>
			<CheckboxGroup
				name="subject"
				onChange={(event) => {
					dispatch(
						setFilters({
							filters: {
								subjectId: event.target.checked
									? event.target.value
									: "",
							},
						})
					);
				}}
			>
				{data.slice(0, isFullOpen ? undefined : 10).map((subject) => (
					<Checkbox
						key={subject.id}
						label={subject.name}
						labelClassName={styles.label}
						checked={subject.id === filters.subjectId}
						value={subject.id}
					/>
				))}
			</CheckboxGroup>
		</FilterBlock>
	);
}
