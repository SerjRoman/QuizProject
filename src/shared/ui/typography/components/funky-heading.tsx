import { Typography } from "../typography";
import styles from "./styles.module.css";

export function FunkyHeading() {
	return (
		<Typography
			className={styles.funkyHeading}
			chidren={<span></span>}
		></Typography>
	);
}
