import { useAppSelector } from "@/shared/lib";
import { Icons, Images } from "@/shared/ui";
import styles from "./profile-block.module.css";

export function ProfileBlock() {
	const { user } = useAppSelector((state) => state.user);
	return (
		<div className={styles.profileBlock}>
			<Icons.Bell />
			<img src={Images.avatar} alt="avatar" />
			<div className={styles.text}>
				<h1 className={styles.usename}>{user?.firstName}</h1>
				<p className={styles.role}>{user?.role.toLowerCase()}</p>
			</div>
		</div>
	);
}
