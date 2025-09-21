import {
	useCallback,
	useState,
	type FunctionComponent,
	type JSX,
	type ReactNode,
} from "react";
import { Modal } from "@/shared/ui";

interface IModalProps {
	children?: ReactNode;
	doCloseOnClickOutside?: boolean;
	className?: string;
}
type CustomModalProps<T> = IModalProps & {
	isOpen: boolean;
	onClose: () => void;
} & T;
interface IModalPropsWithCustomModal<T = object> extends IModalProps {
	ModalComponent?: FunctionComponent<CustomModalProps<T>>;
}

export function useModal<T = object>(): [
	{ open: (customProps: T) => void; close: () => void; isOpen: boolean },
	(props: IModalPropsWithCustomModal<T>) => JSX.Element
] {
	const [isOpen, setIsOpen] = useState(false);
	const [customProps, setCustomProps] = useState<T>();

	const open = useCallback((props: T) => {
		setCustomProps(props);
		setIsOpen(true);
	}, []);
	const close = useCallback(() => {
		setCustomProps(undefined);
		setIsOpen(false);
	}, []);
	const ModalProvider = useCallback(
		(props: IModalPropsWithCustomModal<T>) => {
			const { ModalComponent, ...restProps } = props;

			if (!ModalComponent) {
				return (
					<Modal isOpen={isOpen} onClose={close} {...restProps}>
						{props.children}
					</Modal>
				);
			}
			const finalProps = {
				...restProps,
				...customProps,
				isOpen: isOpen,
				onClose: close,
			};

			return (
				<ModalComponent {...(finalProps as CustomModalProps<T>)}>
					{props.children}
				</ModalComponent>
			);
		},
		[close, customProps, isOpen]
	);
	return [
		{
			open,
			close,
			isOpen,
		},
		ModalProvider,
	];
}
