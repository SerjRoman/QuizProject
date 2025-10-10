import { clsx } from "clsx";
import { useFormContext } from "react-hook-form";
import { Input } from "@/shared/ui";
import styles from "./input.module.css";
import type { IFormInput } from "./input.types";

export function FormInput(props: IFormInput) {
	const { name, label, labelClassName, className, ...restProps } = props;
	const {
		register,
		formState: { errors },
	} = useFormContext();
	return (
		<div className={styles.container}>
			{label && (
				<label
					htmlFor={name}
					className={clsx(styles.label, labelClassName)}
				>
					{label}
				</label>
			)}
			<Input
				className={clsx(styles.input, className)}
				{...register(name)}
				{...restProps}
				aria-invalid={!!errors[name]?.message}
				id={name}
			/>
			{errors[name]?.message && <p className={styles.error}>{errors[name]?.message.toString()}</p>}
		</div>
	);
}
