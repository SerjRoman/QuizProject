import { clsx } from "clsx";
import { createContext, useContext } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./radio.module.css";
import type {
	IRadioContext,
	IRadioGroupProps,
	IRadioProps,
} from "./radio.types";

const RadioContext = createContext<IRadioContext | null>(null);

const useRadioContext = () => {
	const ctx = useContext(RadioContext);
	if (!ctx)
		throw new Error("Radio component must only be used inside RadioGroup");
	return ctx;
};

export function Radio(props: IRadioProps) {
	const {
		label,
		labelClassName,
		isRadioVisible = true,
		value,
		className,
		...restProps
	} = props;
	const { getRadioProps } = useRadioContext();
	return (
		<label className={clsx(styles.label, labelClassName)}>
			<input
				value={value}
				type="radio"
				{...getRadioProps()}
				{...restProps}
				style={{ display: isRadioVisible ? "inline-block" : "none" }}
				className={clsx(styles.radio, className)}
			/>
			{label}
		</label>
	);
}

export function RadioGroup(props: IRadioGroupProps) {
	const { name, onChange } = props;
	const methods = useFormContext();

	function getRadioProps() {
		if (methods && !onChange) {
			return { ...methods.register(name) };
		} else if (!methods && onChange) {
			return { name, onChange };
		} else if (methods && onChange) {
			throw new Error(
				"RadioGroup in FormContext, but onChange was given"
			);
		} else {
			throw new Error(
				"RadioGroup did not receive onChange and is not witihn FormContext"
			);
		}
	}
	return (
		<RadioContext
			value={{
				getRadioProps,
			}}
		>
			{props.children}
		</RadioContext>
	);
}
