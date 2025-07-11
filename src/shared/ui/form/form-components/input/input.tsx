import { clsx } from "clsx";
import { useFormContext } from "react-hook-form";
import styles from "./input.module.css";
import type { IFormInput } from "./input.types";

export function FormInput(props: IFormInput) {
	const { name, label, labelClassname, className, ...restProps } = props;
	const {
		register,
		formState: { errors },
	} = useFormContext();
	return (
		<div className={styles.container}>
			{label && (
				<label
					htmlFor={name}
					className={clsx(styles.label, labelClassname)}
				>
					{label}
				</label>
			)}
			<input
				className={clsx(styles.input, className)}
				{...register(name)}
				{...restProps}
				id={name}
			/>
			{errors[name]?.message && <p>{errors[name]?.message.toString()}</p>}
		</div>
	);
}
