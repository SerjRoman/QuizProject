import { Typography } from "../typography";
import styles from "./styles.module.css";

export function Heading() {
	return (
		<Typography
			className={styles.heading}
			chidren={<span></span>}
		></Typography>
	);
}
