import { clsx } from "clsx";
import { FormProvider, type FieldValues } from "react-hook-form";
import { FormInput } from "./form-components";
import styles from "./form.module.css";
import type { IFormProps } from "./form.types";

export function Form<T extends FieldValues>(props: IFormProps<T>) {
	const { methods, onSubmit, children, formProps } = props;
	return (
		<FormProvider {...methods}>
			<form
				onSubmit={methods.handleSubmit(onSubmit)}
				{...formProps}
				className={clsx(styles.form, formProps?.className)}
			>
				{children}
			</form>
		</FormProvider>
	);
}
Form.Input = FormInput;
