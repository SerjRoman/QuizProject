import { Typography } from "../typography";
import type { TypographyProps } from "../typograpty.types";
import styles from "./styles.module.css";

export function FunkyHeading({ children }: TypographyProps) {
	return <Typography className={styles.funkyHeading}>{children}</Typography>;
}
