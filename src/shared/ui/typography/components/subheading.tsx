import { Typography } from "../typography";
import styles from "./styles.module.css";

export function SubHeading() {
	return (
		<Typography
			className={styles.subHeading}
			chidren={<span></span>}
		></Typography>
	);
}
