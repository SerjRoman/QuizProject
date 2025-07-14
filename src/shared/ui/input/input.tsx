import { clsx } from "clsx";
import {
	cloneElement,
	isValidElement,
	type HTMLAttributes,
	type ReactElement,
} from "react";
import styles from "./input.module.css";
import type { IInput } from "./input.types";

export function Input(props: IInput) {
	const { className, iconLeft, iconRight, label, ...restProps } = props;
	return (
		<label className={styles.label}>
			{label && <span className={styles.labelText}>{label}</span>}
			<div className={styles.inputWrapper}>
				{isValidElement(iconLeft) &&
					cloneElement(
						iconLeft as ReactElement<HTMLAttributes<SVGSVGElement>>,
						{
							className: clsx(styles.icon, styles.iconLeft),
						}
					)}
				<input
					className={clsx(styles.input, className)}
					style={{
						paddingLeft: iconLeft ? "40px" : "",
						paddingRight: iconRight ? "40px" : "",
					}}
					{...restProps}
				/>
				{isValidElement(iconRight) &&
					cloneElement(
						iconRight as ReactElement<
							HTMLAttributes<SVGSVGElement>
						>,
						{
							className: clsx(styles.icon, styles.iconRight),
						}
					)}
			</div>
		</label>
	);
}
