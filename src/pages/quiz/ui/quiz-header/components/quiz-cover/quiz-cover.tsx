import { clsx } from "clsx";
import type { QuizStatus } from "@/entities/quiz";
import { Images, Typography } from "@/shared/ui";
import styles from "./quiz-cover.module.css";

export function QuizCover({
	coverImage,
	status,
}: {
	coverImage: string | null;
	status: QuizStatus;
}) {
	const isPublished = status === "PUBLISHED";
	return (
		<div className={styles.container}>
			<img
				src={coverImage ? coverImage : Images.colorBubblesBackground}
				alt="Cover Image"
				className={styles.coverImage}
			/>

			<div
				className={clsx(
					styles.badge,
					isPublished ? styles.publishedBadge : styles.draftBadge
				)}
			>
				<Typography.SmallBody>
					{isPublished ? "Published" : "Draft"}
				</Typography.SmallBody>
			</div>
		</div>
	);
}
