import { clsx } from "clsx";
import styles from "./chip.module.css";
import type { ChipProps } from "./chip.types";
export function Chip({
	labelNode,
	variant = "default",
	className,
	...restProps
}: ChipProps) {
	return (
		<span
			className={clsx(styles.chip, styles[variant], className)}
			{...restProps}
		>
			{labelNode}
			{restProps.children}
		</span>
	);
}
