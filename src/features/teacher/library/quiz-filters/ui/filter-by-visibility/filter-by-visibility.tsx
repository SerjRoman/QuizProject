import { type ChangeEvent } from "react";
import { setVisibility, type QuizVisibility } from "@/entities/quiz";
import { useAppDispatch } from "@/shared/lib";
import { Checkbox, CheckboxGroup } from "@/shared/ui";
import { Checkmarks } from "@/shared/ui/checkbox/checkmarks";
import styles from "./filter-by-visibility.module.css";
export function QuizFilterByVisibility() {
	const dispatch = useAppDispatch();
	function handleVisibilityChange(event: ChangeEvent<HTMLInputElement>) {
		const visibility = event.target.value as QuizVisibility;
		dispatch(setVisibility(visibility));
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
