import { clsx } from "clsx";
import styles from "./icon-button.module.css";
import type { IconButtonProps } from "./icon-button.types";

export function IconButton({ className, ...props }: IconButtonProps) {
	return (
		<button {...props} className={clsx(styles.button, className)}></button>
	);
}
