import { RadioGroup, Radio } from "@/shared/ui";
import styles from "./select-shuffle-answers.module.css"

export function SelectShuffleAnswers() {
	return (
		<label className={styles.selectBlock}>
			Shuffle answers:
			<RadioGroup name={"shuffleAnswers"}>
				<Radio
					value={"true"}
					labelClassName={styles.select}
					label="true"
				/>
				<Radio
					value={"false"}
					labelClassName={styles.select}
					label="false"
				/>
			</RadioGroup>
		</label>
	);
}
