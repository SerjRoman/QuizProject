import { clsx } from "clsx";
import styles from "./input.module.css";
import type { IInput } from "./input.types";

export function Input(props: IInput) {
	const { className, ...restProps } = props;
	return <input className={clsx(styles.input, className)} {...restProps} />;
}
