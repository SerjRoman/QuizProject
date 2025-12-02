import { Typography } from "../typography";
import type { TypographyProps } from "../typograpty.types";
import styles from "./styles.module.css";

export function Body(props: TypographyProps) {
	return <Typography {...props} className={styles.body} />;
}
