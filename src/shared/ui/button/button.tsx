import { clsx } from "clsx";
import { Typography } from "../typography";
import styles from "./button.module.css";
import type { IButtonProps } from "./button.types";
export function Button(props: IButtonProps) {
	const { title, variant, className, ...restProps } = props;
	const variantClassName = `button-${variant}`;
	return (
		<button
			className={clsx(styles.button, styles[variantClassName], className)}
			{...restProps}
		>
			<Typography.Body>{title}</Typography.Body>
		</button>
	);
}
