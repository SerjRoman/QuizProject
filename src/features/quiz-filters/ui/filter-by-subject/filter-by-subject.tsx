import { useState, type ChangeEvent } from "react";
import { setSubject } from "@/entities/quiz";
import { useGetSubjectsQuery } from "@/shared/api";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { Checkbox, CheckboxGroup, FilterBlock } from "@/shared/ui";
import styles from "./filter-by-subject.module.css";

export function QuizFilterBySubjectBlock() {
	const { data = [] } = useGetSubjectsQuery();
	const dispatch = useAppDispatch();
	const filters = useAppSelector((state) => state.quizFilters.filters);
	const [isFullOpen, setIsFullOpen] = useState<boolean>(false);
	function onChange(event: ChangeEvent<HTMLInputElement>) {
		dispatch(setSubject(event.target.value));
	}
	return (
		<FilterBlock
			actions={
				data.length > 10 && (
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
			title="Subject"
		>
			<CheckboxGroup name="subject" onChange={onChange}>
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
