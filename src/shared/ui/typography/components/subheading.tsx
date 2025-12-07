import { clsx } from "clsx";
import { Typography } from "../typography";
import type { TypographyProps } from "../typograpty.types";
import styles from "./styles.module.css";

export function SubHeading({ className, ...restProps }: TypographyProps) {
	return (
		<Typography
			className={clsx(styles.subHeading, className)}
			{...restProps}
		/>
	);
}
