import { Typography } from "../typography";
import type { TypographyProps } from "../typograpty.types";
import styles from "./styles.module.css";

export function Body({ children}: TypographyProps) {
	return <Typography className={styles.body}>{children}</Typography>;
}
