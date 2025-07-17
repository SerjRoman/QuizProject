import { clsx } from "clsx";
import { Icons } from "@/shared/ui";
import {
	useAddToFavouriteMutation,
	useRemoveFromFavouriteMutation,
} from "../../api";
import styles from "./item.module.css";
import type { IQuizItemProps } from "./item.types";

export function QuizItem(props: IQuizItemProps) {
	const [addToFavourite] = useAddToFavouriteMutation();
	const [removeFromFavourite] = useRemoveFromFavouriteMutation();
	const { quiz, actions } = props;
	return (
		<div className={styles.item}>
			<p className={styles.dataTitle}>{quiz.title}</p>
			<p className={styles.dataDate}>{quiz.createdAt.toDateString()}</p>
			<p className={styles.dataAdditionalButtons}>
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
			</p>
		</div>
	);
}
