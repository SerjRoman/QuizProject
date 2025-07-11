import { Icons, Images } from "@/shared/ui";
import styles from "./profile-block.module.css";

export function ProfileBlock() {
	return (
		<div className={styles.profileBlock}>
			<Icons.Bell />
			<img src={Images.avatar} alt="avatar" />
			<div className={styles.text}>
				<h1 className={styles.usename}>Username</h1>
				<p className={styles.role}>teacher</p>
			</div>
		</div>
	);
}
