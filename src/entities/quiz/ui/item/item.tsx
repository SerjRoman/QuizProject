import { Images, Typography } from "@/shared/ui";
import styles from "./item.module.css";
import type { QuizItemProps } from "./item.types";

export function QuizItem(props: QuizItemProps) {
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
				<Typography.Body className={styles.dataTitle}>
					{quiz.title}
				</Typography.Body>
			</div>
			<p className={styles.dataDate}>{quiz.createdAt.toDateString()}</p>
			<div className={styles.createdByBlock}>
				<img
					src={
						quiz.creator.user.avatar
							? quiz.creator.user.avatar
							: Images.defaultAvatar
					}
					className={styles.avatar}
				/>
				<span>
					{isMy
						? "Me"
						: `${quiz.creator.user.firstName} ${quiz.creator.user.lastName}`}
				</span>
			</div>
			<div className={styles.dataAdditionalButtons}>
				<div className={styles.buttons}>{actions}</div>
			</div>
		</div>
	);
}
