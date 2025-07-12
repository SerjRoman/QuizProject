import type { ChangeEvent, HTMLAttributes, PropsWithChildren } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

export interface IRadioProps
	extends Omit<HTMLAttributes<HTMLInputElement>, "type"> {
	label?: string;
	value: string;
}
type FormGetRadioProps = UseFormRegisterReturn;
type GetRadioProps = {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	name: string;
};

export interface IRadioContext {
	getRadioProps: () => GetRadioProps | FormGetRadioProps;
}

export interface IRadioGroupProps extends PropsWithChildren {
	name: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
