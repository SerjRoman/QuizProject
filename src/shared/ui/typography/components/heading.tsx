import { Typography } from "../typography";
import type { TypographyProps } from "../typograpty.types";
import styles from "./styles.module.css";

export function Heading({ children}: TypographyProps) {
	return <Typography className={styles.heading}>{children}</Typography>;
}
