import {
	createContext,
	useContext,
	type Dispatch,
	type SetStateAction,
} from "react";

interface PopoverContext {
	showOn: "hover" | "click";
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	anchorElement: HTMLElement | null;
	setAnchorElement: (node: HTMLElement | null) => void;
	positionOrigin?: {
		vertical?: "center" | "top" | "bottom";
		horizontal?: "center" | "left" | "right";
		includeTriggerSize?: boolean;
	};
	absolutePositionOrigin?: {
		vertical: number;
		horizontal: number;
	};
	handleOpen: () => void;
	handleClose: () => void;
}

export const PopoverContext = createContext<PopoverContext | null>(null);

export function usePopoverContext() {
	const context = useContext(PopoverContext);
	if (!context) throw new Error("Used outside of Popover");
	return context;
}
