import { useCallback, useRef, useState } from "react";
import { Content } from "./components/content";
import { PopoverContext } from "./components/context";
import { Trigger } from "./components/trigger";
import type { PopoverProps } from "./popover.types";

export function Popover({
	showOn = "hover",
	positionOrigin,
	children,
}: PopoverProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(
		null
	);
	const timerId = useRef<NodeJS.Timeout | null>(null);
	const handleOpen = useCallback(() => {
		if (timerId.current) {
			clearTimeout(timerId.current);
		}
		if (showOn === "hover") {
			setIsOpen(true);
		}
	}, [showOn]);

	const handleClose = useCallback(() => {
		if (showOn === "hover") {
			timerId.current = setTimeout(() => {
				setIsOpen(false);
			}, 150);
		}
	}, [showOn]);
	return (
		<PopoverContext
			value={{
				showOn,
				positionOrigin,
				isOpen,
				setIsOpen,
				anchorElement,
				setAnchorElement,
				handleClose,
				handleOpen,
			}}
		>
			{children}
		</PopoverContext>
	);
}
Popover.Trigger = Trigger;
Popover.Content = Content;
