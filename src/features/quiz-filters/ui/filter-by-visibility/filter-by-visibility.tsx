import { type ChangeEvent } from "react";
import {
	addVisibility,
	removeVisibility,
	type QuizVisibility,
} from "@/entities/quiz";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { Checkbox, CheckboxGroup, Checkmarks } from "@/shared/ui";
import styles from "./filter-by-visibility.module.css";
export function QuizFilterByVisibility() {
	const dispatch = useAppDispatch();
	const { selectedVisibilities } = useAppSelector(
		(state) => state.quizFilters
	);

	function handleVisibilityChange(event: ChangeEvent<HTMLInputElement>) {
		const visibility = event.target.value as QuizVisibility;
		if (!selectedVisibilities.includes(visibility)) {
			dispatch(addVisibility(visibility));
		} else {
			dispatch(removeVisibility(visibility));
		}
	}
	return (
		<div className={styles.container}>
			<CheckboxGroup
				name={"visibility"}
				onChange={handleVisibilityChange}
			>
				<Checkbox
					labelClassName={styles.checkbox}
					label="Private"
					value={"PRIVATE"}
					checkmark={<Checkmarks.One />}
				/>
				<Checkbox
					labelClassName={styles.checkbox}
					label="Public"
					value={"PUBLIC"}
					checkmark={<Checkmarks.One />}
				/>
			</CheckboxGroup>
		</div>
	);
}
