import { clsx } from "clsx";
import { Icons, Images } from "@/shared/ui";
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
			<div className={styles.infoBlock}>
				<img
					src={
						quiz.coverImage
							? quiz.coverImage
							: Images.colorBubblesBackground
					}
					className={styles.coverImage}
				/>
				<p className={styles.dataTitle}>{quiz.title}</p>
			</div>
			<p className={styles.dataDate}>{quiz.createdAt.toDateString()}</p>
			<div className={styles.createdByBlock}>
				<img
					src={
						quiz.user.avatar
							? quiz.user.avatar
							: Images.defaultAvatar
					}
					className={styles.avatar}
				/>
				<span>
					{quiz.user.firstName} {quiz.user.lastName}
				</span>
			</div>
			<div className={styles.dataAdditionalButtons}>
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
			</div>
		</div>
	);
}
