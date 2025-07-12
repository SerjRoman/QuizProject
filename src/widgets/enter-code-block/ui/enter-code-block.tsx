import { EnterCodeForm } from "@/features/room";
import styles from "./enter-code-block.module.css";
export function EnterCodeBlock() {
	return (
		<div className={styles.joinRoomBlock}>
			<p className={styles.title}>WELCOME</p>
			<EnterCodeForm />
		</div>
	);
}
