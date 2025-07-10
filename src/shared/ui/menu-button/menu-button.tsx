import { clsx } from "clsx";
import styles from "./menu-button.module.css";
import type { IMenuButtonProps } from "./menu-button.types";

export function MenuButton({
	iconLeft,
	iconRight,
	title,
	color,
	hoverColor,
	...rest
}: IMenuButtonProps) {
	return (
		<button
			className={clsx(styles.button, styles[color], styles[hoverColor])}
			{...rest}
		>
			<div className={iconLeft? styles.icon : ""}>{iconLeft}</div>
			<p className={styles.title}>{title}</p>
			<span className={iconRight? styles.icon : ""}>{iconRight}</span>
		</button>
	);
}
