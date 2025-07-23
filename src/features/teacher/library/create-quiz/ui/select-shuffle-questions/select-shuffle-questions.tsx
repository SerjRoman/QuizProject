import { Radio, RadioGroup } from "@/shared/ui";
import styles from "./select-shuffle-questions.module.css";

export function SelectShuffleQuestions() {
	return (
		<label className={styles.selectBlock}>
			Shuffle questions:
			<RadioGroup name={"shuffleQuestions"}>
				<Radio
					value={"true"}
					labelClassName={styles.select}
					label="yes"
				/>
				<Radio
					value={"false"}
					labelClassName={styles.select}
					label="no"
				/>
			</RadioGroup>
		</label>
	);
}
