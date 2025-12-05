import { clsx } from "clsx";
import { Typography } from "../typography";
import type { TypographyProps } from "../typograpty.types";
import styles from "./styles.module.css";

export function FunkyHeading({ className, ...restProps }: TypographyProps) {
	return (
		<Typography
			className={clsx(styles.funkyHeading, className)}
			{...restProps}
		/>
	);
}
