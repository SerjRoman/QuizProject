import { clsx } from "clsx";
import { createContext, useContext } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./checkbox.module.css";
import type {
	ICheckboxContext,
	ICheckboxGroupProps,
	ICheckboxProps,
} from "./checkbox.types";

const CheckboxContext = createContext<null | ICheckboxContext>(null);

function useCheckboxContext() {
	const ctx = useContext(CheckboxContext);
	if (!ctx) throw new Error("Checkbox component is not inside CheckboxGroup");
	return ctx;
}
export function Checkbox(props: ICheckboxProps) {
	const {
		label,
		labelClassName,
		isCheckboxVisible,
		checkmark,
		...restProps
	} = props;
	const { getCheckboxProps } = useCheckboxContext();
	return (
		<label className={clsx(styles.label, labelClassName)}>
			{checkmark}
			{label}
			<input
				{...restProps}
				{...getCheckboxProps()}
				type="checkbox"
				style={{ display: isCheckboxVisible ? "inline-block" : "none" }}
			/>
		</label>
	);
}

export function CheckboxGroup(props: ICheckboxGroupProps) {
	const { onChange, name, children } = props;
	const methods = useFormContext();

	function getCheckboxProps() {
		if (methods && !onChange) {
			return { ...methods.register(name) };
		} else if (!methods && onChange) {
			return { name, onChange };
		} else if (methods && onChange) {
			return { name, onChange };
		} else {
			throw new Error(
				"CheckboxGroup did not receive onChange and is not witihn FormContext"
			);
		}
	}
	return (
		<CheckboxContext value={{ getCheckboxProps }}>
			{children}
		</CheckboxContext>
	);
}
