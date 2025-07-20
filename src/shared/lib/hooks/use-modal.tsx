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
interface IModalPropsWithCustomModal<T = object> {
	children?: ReactNode;
	doCloseOnClickOutside?: boolean;
	className?: string;
	ModalComponent?: FunctionComponent<
		IModalProps & { isOpen: boolean; onClose: () => void } & T
	>;
	customProps?: T;
}

export function useModal<T = object>(): [
	{ open: () => void; close: () => void; isOpen: boolean },
	(props: IModalPropsWithCustomModal<T>) => JSX.Element
] {
	const [isOpen, setIsOpen] = useState(false);

	const ModalProvider = useCallback(
		(props: IModalPropsWithCustomModal<T>) => {
			const {
				ModalComponent,
				customProps = {} as T,
				...restProps
			} = props;
			if (!ModalComponent) {
				return (
					<Modal
						isOpen={isOpen}
						onClose={() => setIsOpen(false)}
						{...restProps}
					>
						{props.children}
					</Modal>
				);
			}
			return (
				<ModalComponent
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					{...restProps}
					{...customProps}
				>
					{props.children}
				</ModalComponent>
			);
		},
		[isOpen, setIsOpen]
	);
	return [
		{
			open: () => setIsOpen(true),
			close: () => setIsOpen(false),
			isOpen,
		},
		ModalProvider,
	];
}
