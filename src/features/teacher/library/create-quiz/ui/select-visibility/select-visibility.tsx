import { VisibilityTypeConstant } from "@/entities/quiz";
import { Radio, RadioGroup } from "@/shared/ui";
import styles from "./select-visibility.module.css"

export function SelectVisibility() {
	return (
		<label className={styles.selectBlock}>
			Visibitily:
			<RadioGroup name={"visibility"}>
				<Radio
					value={VisibilityTypeConstant.PRIVATE}
					labelClassName={styles.select}
					label="private"
				/>
				<Radio
					value={VisibilityTypeConstant.PUBLIC}
					labelClassName={styles.select}
					label="public"
				/>
			</RadioGroup>
		</label>
	);
}
