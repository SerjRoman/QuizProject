import { Typography } from "../typography";
import styles from "./styles.module.css";

export function FooterSmallBody() {
	return (
		<Typography
			className={styles.footerSmallBody}
			chidren={<span></span>}
		></Typography>
	);
}
