import { useCallback, useState, type JSX, type ReactNode } from "react";
import { Modal } from "@/shared/ui";

interface IModalProps {
	children?: ReactNode;
	doCloseOnClickOutside?: boolean;
}

export function useModal(): [
	{ open: () => void; close: () => void; isOpen: boolean },
	(props: IModalProps) => JSX.Element
] {
	const [isOpen, setIsOpen] = useState(false);

	const ModalProvider = useCallback(
		(props: IModalProps) => {
			return (
				<Modal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					doCloseOnClickOutside={props.doCloseOnClickOutside}
				>
					{props.children}
				</Modal>
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
