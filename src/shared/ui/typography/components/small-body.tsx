import { Typography } from "../typography";
import type { TypographyProps } from "../typograpty.types";
import styles from "./styles.module.css";

export function SmallBody({ children }: TypographyProps) {
	return <Typography className={styles.smallBody}>{children}</Typography>;
}
