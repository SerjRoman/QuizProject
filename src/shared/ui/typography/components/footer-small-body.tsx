import { Typography } from "../typography";
import type { TypographyProps } from "../typograpty.types";
import styles from "./styles.module.css";

export function FooterSmallBody({ children }: TypographyProps) {
	return (
		<Typography className={styles.footerSmallBody}>{children}</Typography>
	);
}
