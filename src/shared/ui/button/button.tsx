import { clsx } from "clsx";
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
			{title}
		</button>
	);
}
