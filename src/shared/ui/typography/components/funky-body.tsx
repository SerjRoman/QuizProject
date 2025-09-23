import { Typography } from "../typography";
import styles from "./styles.module.css";

export function FunkyBody() {
	return (
		<Typography
			className={styles.funkyBody}
			chidren={<span></span>}
		></Typography>
	);
}
