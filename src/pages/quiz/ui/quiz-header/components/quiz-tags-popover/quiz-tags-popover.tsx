import type { Taxonomy } from "@/shared/lib";
import { Chip, Icons, MenuButton, Popover, Typography } from "@/shared/ui";
import styles from "./quiz-tags-popover.module.css";
export function QuizTagsPopover({
	tags,
	languages,
	subject,
}: {
	tags: Taxonomy[];
	languages: Taxonomy[];
	subject: Taxonomy;
}) {
	return (
		<Popover
			showOn="click"
			positionOrigin={{
				vertical: "bottom",
				horizontal: "right",
				includeTriggerSize: true,
			}}
		>
			<Popover.Trigger>
				<MenuButton
					title={"See tags"}
					className={styles.popoverButton}
					iconRight={<Icons.Tag />}
				/>
			</Popover.Trigger>
			<Popover.Content>
				<div className={styles.content}>
					<div className={styles.taxonomyBlock}>
						<Typography.Body>Tags</Typography.Body>
						<ul className={styles.list}>
							{tags.map((tag) => (
								<li>
									<Chip
										variant="green"
										key={tag.id}
										labelNode={
											<Typography.SmallBody>
												{tag.name}
											</Typography.SmallBody>
										}
									/>
								</li>
							))}
						</ul>
					</div>
					<div className={styles.taxonomyBlock}>
						<Typography.Body>Languages</Typography.Body>
						<ul className={styles.list}>
							{languages.map((language) => (
								<li>
									<Chip
										variant="blue"
										key={language.id}
										labelNode={
											<Typography.SmallBody>
												{language.name}
											</Typography.SmallBody>
										}
									/>
								</li>
							))}
						</ul>
					</div>
					<div className={styles.taxonomyBlock}>
						<Typography.Body>Subject</Typography.Body>
						<ul className={styles.list}>
							<li>
								<Chip
									variant="pink"
									labelNode={
										<Typography.SmallBody>
											{subject.name}
										</Typography.SmallBody>
									}
								/>
							</li>
						</ul>
					</div>
				</div>
			</Popover.Content>
		</Popover>
	);
}
