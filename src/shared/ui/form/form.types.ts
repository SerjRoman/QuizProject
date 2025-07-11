import type { HTMLAttributes, ReactNode } from "react";
import type { FieldValues, UseFormReturn } from "react-hook-form";

export interface IFormProps<T extends FieldValues> {
	onSubmit: (data: T) => void;
	methods: UseFormReturn<T>;
	children: ReactNode;
	formProps?: HTMLAttributes<HTMLFormElement>;
}
