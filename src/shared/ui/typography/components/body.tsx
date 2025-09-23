import { Typography } from "../typography";
import styles from "./styles.module.css";

export function Body() {
	return (
		<Typography
			className={styles.body}
			chidren={<span></span>}
		></Typography>
	);
}
