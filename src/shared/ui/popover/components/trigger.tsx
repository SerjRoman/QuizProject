import {
	cloneElement,
	type HTMLAttributes,
	type HTMLProps,
	type ReactElement,
	type ReactNode,
	type Ref,
} from "react";
import { usePopoverContext } from "./context";

interface TriggerProps extends HTMLProps<HTMLDivElement> {
	children?: ReactNode;
}

export function Trigger(props: TriggerProps) {
	const { setIsOpen, handleClose, handleOpen, showOn, setAnchorElement } =
		usePopoverContext();

	const child = props.children as ReactElement<
		HTMLAttributes<HTMLElement> & { ref?: Ref<HTMLElement> }
	>;

	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		child.props.onClick?.(e as React.MouseEvent<HTMLElement>);

		if (showOn === "click") {
			setIsOpen((prev) => !prev);
		}
	};

	const handleMouseEnter = (e: React.MouseEvent) => {
		child.props.onMouseEnter?.(e as React.MouseEvent<HTMLElement>);
		if (showOn === "hover") handleOpen();
	};

	const handleMouseLeave = (e: React.MouseEvent) => {
		child.props.onMouseLeave?.(e as React.MouseEvent<HTMLElement>);
		if (showOn === "hover") handleClose();
	};

	const handleRef = (node: HTMLElement) => {
		setAnchorElement(node);
		const ref = child.props.ref;
		if (typeof ref === "function") {
			ref(node);
		} else if (ref) {
			ref.current = node;
		}
	};

	return cloneElement(child, {
		ref: handleRef,
		onClick: handleClick,
		onMouseEnter: handleMouseEnter,
		onMouseLeave: handleMouseLeave,
		"aria-haspopup": "true",
		"aria-expanded": showOn === "click" ? true : undefined,
	});
}
