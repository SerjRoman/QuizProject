import {
	createContext,
	useContext,
	type ChangeEvent,
	type PropsWithChildren,
} from "react";
import styles from "./radio.module.css";
import type { IRadioProps } from "./radio.types";

interface IRadioContext {
	name: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RadioContext = createContext<IRadioContext | null>(null);

const useRadioContext = () => {
	const ctx = useContext(RadioContext);
	if (!ctx)
		throw new Error("Radio component must only be used inside RadioGroup");
	return ctx;
};

export function Radio(props: IRadioProps) {
	const { label, value, ...restProps } = props;
	const ctx = useRadioContext();
	return (
		<label className={styles.label}>
			<input value={value} type="radio" {...ctx} {...restProps} />
			{label}
		</label>
	);
}
interface IRadioGroupProps extends PropsWithChildren {
	name: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function RadioGroup(props: IRadioGroupProps) {
	return (
		<RadioContext
			value={{
				name: props.name,
				onChange: props.onChange,
			}}
		>
			{props.children}
		</RadioContext>
	);
}
