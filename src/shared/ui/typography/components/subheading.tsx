import { Typography } from "../typography";
import type { TypographyProps } from "../typograpty.types";
import styles from "./styles.module.css";

export function SubHeading({ children }: TypographyProps) {
	return <Typography className={styles.subHeading}>{children}</Typography>;
}
