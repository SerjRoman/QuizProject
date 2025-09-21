import { Images } from "@/shared/ui";
import styles from "./item.module.css";
import type { IQuizItemProps } from "./item.types";

export function QuizItem(props: IQuizItemProps) {
	const { quiz, actions, isMy } = props;
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
						quiz.createdBy.user.avatar
							? quiz.createdBy.user.avatar
							: Images.defaultAvatar
					}
					className={styles.avatar}
				/>
				<span>
					{isMy
						? "Me"
						: `${quiz.createdBy.user.firstName} ${quiz.createdBy.user.lastName}`}
				</span>
			</div>
			<div className={styles.dataAdditionalButtons}>
				<div className={styles.buttons}>{actions}</div>
			</div>
		</div>
	);
}
