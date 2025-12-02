import { Typography } from "../typography";
import type { TypographyProps } from "../typograpty.types";
import styles from "./styles.module.css";

export function FunkyBody({ children }: TypographyProps) {
	return <Typography className={styles.funkyBody}>{children}</Typography>;
}
