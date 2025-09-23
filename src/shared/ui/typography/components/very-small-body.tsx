import { Typography } from "../typography";
import styles from "./styles.module.css";

export function VerySmallBody() {
	return (
		<Typography
			className={styles.verySmallBody}
			chidren={<span></span>}
		></Typography>
	);
}
