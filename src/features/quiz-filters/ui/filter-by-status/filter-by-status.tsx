import type { ChangeEvent } from "react";
import { addStatus, removeStatus, type QuizStatus } from "@/entities/quiz";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { Checkbox, CheckboxGroup, Checkmarks } from "@/shared/ui";
import styles from "./filter-by-Status.module.css";

export function QuizFilterByStatus() {
	const dispatch = useAppDispatch();
	const { selectedStatuses } = useAppSelector((state) => state.quizFilters);
	function handleStatusChange(event: ChangeEvent<HTMLInputElement>) {
		const status = event.target.value as QuizStatus;
		if (!selectedStatuses.includes(status)) {
			dispatch(addStatus(status));
		} else {
			dispatch(removeStatus(status));
		}
	}
	return (
		<div className={styles.container}>
			<CheckboxGroup name={"status"} onChange={handleStatusChange}>
				<Checkbox
					labelClassName={styles.checkbox}
					label="Published"
					value={"PUBLISHED"}
					checkmark={<Checkmarks.One />}
				/>
				<Checkbox
					labelClassName={styles.checkbox}
					label="Draft"
					value={"DRAFT"}
					checkmark={<Checkmarks.One />}
				/>
			</CheckboxGroup>
		</div>
	);
}
