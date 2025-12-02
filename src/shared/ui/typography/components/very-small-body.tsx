import { Typography } from "../typography";
import type { TypographyProps } from "../typograpty.types";
import styles from "./styles.module.css";

export function VerySmallBody({ children }: TypographyProps) {
	return <Typography className={styles.verySmallBody}>{children}</Typography>;
}
