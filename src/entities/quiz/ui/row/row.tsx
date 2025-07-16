import { clsx } from "clsx";
import { Icons } from "@/shared/ui";
import {
	useAddToFavouriteMutation,
	useRemoveFromFavouriteMutation,
} from "../../api";
import styles from "./row.module.css";
import type { IQuizTableRowProps } from "./row.types";

export function QuizTableRow(props: IQuizTableRowProps) {
	const [addToFavourite] = useAddToFavouriteMutation();
	const [removeFromFavourite] = useRemoveFromFavouriteMutation();
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
						onClick={() => {
							if (!quiz.isFavourite)
								addToFavourite({ id: quiz.id });
							else removeFromFavourite({ id: quiz.id });
						}}
					/>
					{actions}
				</div>
			</td>
		</tr>
	);
}
