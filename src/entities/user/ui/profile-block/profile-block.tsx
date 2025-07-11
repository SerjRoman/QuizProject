import { Icons, Images } from "@/shared/ui";
import styles from "./profile-block.module.css"

export function ProfileBlock (){
    return(
        <div className={styles.profileBlock}>
				<Icons.Bell />
				<img src={Images.avatar} alt="avatar" />
				<h1 className={styles.text}>Teacher</h1>
			</div>
    )
}