import { clsx } from "clsx";
import { Icons } from "@/shared/ui";
import styles from "./row.module.css";
import type { IQuizTableRowProps } from "./row.types";

export function QuizTableRow(props: IQuizTableRowProps) {
	const { quiz, actions } = props;
	return (
		<tr className={styles.row}>
			<td className={styles.dataTitle}>{quiz.title}</td>
			<td className={styles.dataDate}>{quiz.createdAt.toDateString()}</td>
			<td className={styles.dataAdditionalButtons}>
				<div className={styles.buttons}>
					<Icons.Star
						className={clsx(
							styles.starIcon,
							quiz.isFavourite ? styles.fill : styles.default
						)}
					/>
					{actions}
				</div>
			</td>
		</tr>
	);
}
