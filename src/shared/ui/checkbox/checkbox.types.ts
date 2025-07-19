import type {
	ChangeEvent,
	DetailedHTMLProps,
	InputHTMLAttributes,
	ReactNode,
} from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

type FormGetCheckboxProps = UseFormRegisterReturn;
type CommonCheckboxProps = {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	name: string;
};
export interface ICheckboxProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	label: string;
	isCheckboxVisible?: boolean;
	labelClassName?: string;
	checkmark?: ReactNode;
}

export interface ICheckboxGroupProps {
	name: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	children?: ReactNode;
}

export interface ICheckboxContext {
	getCheckboxProps: () => FormGetCheckboxProps | CommonCheckboxProps;
}
