import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import type { QuizDetails } from "@/entities/quiz";
import { useAppSelector } from "@/shared/lib";
import { Typography } from "@/shared/ui";
import { OwnerPreview, QuizCover, QuizTagsPopover } from "./components";
import styles from "./quiz-header.module.css";

export function QuizHeader({ quiz }: { quiz: QuizDetails }) {
	const stringifiedUpdatedAt = formatDistanceToNow(quiz.updatedAt, {
		addSuffix: true,
	});
	const { user } = useAppSelector((state) => state.user);
	const isQuizOwner = quiz.owner?.user.id === user?.id;
	return (
		<div className={styles.header}>
			<QuizCover coverImage={quiz.coverImage} status={quiz.status} />
			<div className={styles.infoBlock}>
				<Typography.SubHeading>{quiz.title}</Typography.SubHeading>
				<Typography.Body>
					Last updated: {stringifiedUpdatedAt}
				</Typography.Body>
				<OwnerPreview isOwner={isQuizOwner} owner={quiz.owner} />
				<div className={styles.quiz}>
					<QuizTagsPopover
						tags={quiz.tags}
						languages={quiz.languages}
						subject={quiz.subject}
					/>
				</div>
			</div>
		</div>
	);
}
