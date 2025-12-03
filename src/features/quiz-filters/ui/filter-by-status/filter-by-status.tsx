import type { ChangeEvent } from "react";
import { setStatus, type QuizStatus } from "@/entities/quiz";
import { useAppDispatch } from "@/shared/lib";
import { Checkbox, CheckboxGroup, Checkmarks } from "@/shared/ui";
import styles from "./filter-by-Status.module.css";

export function QuizFilterByStatus() {
	const dispatch = useAppDispatch();

	function handleStatusChange(event: ChangeEvent<HTMLInputElement>) {
		const status = event.target.value as QuizStatus;
		dispatch(setStatus(status));
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
