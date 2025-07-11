import { FormProvider, type FieldValues } from "react-hook-form";
import type { IFormProps } from "./form.types";

export function Form<T extends FieldValues>(props: IFormProps<T>) {
	const { methods, onSubmit, children, formProps } = props;
	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} {...formProps}>
				{children}
			</form>
		</FormProvider>
	);
}
