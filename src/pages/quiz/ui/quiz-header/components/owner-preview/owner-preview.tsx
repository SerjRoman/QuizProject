import type { TeacherProfile } from "@/entities/user";
import { Images, Typography } from "@/shared/ui";
import styles from "./owner-preview.module.css";
export function OwnerPreview({
	isOwner,
	owner,
}: {
	isOwner: boolean;
	owner?: TeacherProfile;
}) {
	return (
		<div className={styles.container}>
			<Typography.Body>Owner</Typography.Body>
			<div className={styles.userInfoBlock}>
				<img
					src={
						owner?.user.avatar
							? owner?.user.avatar
							: Images.defaultAvatar
					}
					alt="Avatar"
					className={styles.avatar}
				/>
				<Typography.VerySmallBody>
					{isOwner
						? "Me"
						: `${owner?.user.firstName} ${owner?.user.lastName}`}
				</Typography.VerySmallBody>
			</div>
		</div>
	);
}
