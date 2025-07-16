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
interface IModalPropsWithCustomModal {
	children?: ReactNode;
	doCloseOnClickOutside?: boolean;
	className?: string;
	ModalComponent?: FunctionComponent<
		IModalProps & { isOpen: boolean; onClose: () => void }
	>;
}

export function useModal(): [
	{ open: () => void; close: () => void; isOpen: boolean },
	(props: IModalPropsWithCustomModal) => JSX.Element
] {
	const [isOpen, setIsOpen] = useState(false);

	const ModalProvider = useCallback(
		(props: IModalPropsWithCustomModal) => {
			const { ModalComponent, ...restProps } = props;
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
