import { Typography } from "../typography";
import styles from "./styles.module.css";

export function SmallBody() {
	return (
		<Typography
			className={styles.smallBody}
			chidren={<span></span>}
		></Typography>
	);
}
