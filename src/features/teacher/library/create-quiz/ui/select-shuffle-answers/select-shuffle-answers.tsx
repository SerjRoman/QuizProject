import { RadioGroup, Radio } from "@/shared/ui";
import styles from "./select-shuffle-answers.module.css"

export function SelectShuffleAnswers() {
	return (
		<label className={styles.selectBlock}>
			Shuffle answers:
			<RadioGroup name={"shuffleAnswers"}>
				<Radio
					value={true}
					labelClassName={styles.select}
					label="yes"
				/>
				<Radio
					value={false}
					labelClassName={styles.select}
					label="no"
				/>
			</RadioGroup>
		</label>
	);
}
