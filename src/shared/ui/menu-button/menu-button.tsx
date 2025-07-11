import { clsx } from "clsx";
import styles from "./menu-button.module.css";
import type { IMenuButtonProps } from "./menu-button.types";

export function MenuButton({
	iconLeft,
	iconRight,
	title,
    className,
    enabled,
	...rest
}: IMenuButtonProps) {
	return (
		<button
			className={clsx(styles.button, enabled && styles.enabled, className)}
			{...rest}
		>
			<div className={clsx(iconLeft && styles.icon)}>{iconLeft}</div>
			<p className={styles.title}>{title}</p>
			<div className={clsx(iconRight && styles.icon)}>{iconRight}</div>
		</button>
	);
}
