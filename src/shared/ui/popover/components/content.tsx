import {
	useLayoutEffect,
	useRef,
	useState,
	type CSSProperties,
	type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { usePopoverContext } from "./context";

const contentStyles: CSSProperties = {
	position: "absolute",
	zIndex: 9999,
	width: "max-content",
};

export function Content({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	const {
		isOpen,
		anchorElement,
		positionOrigin,
		absolutePositionOrigin,
		handleOpen,
		handleClose,
	} = usePopoverContext();

	const contentRef = useRef<HTMLDivElement>(null);
	const [coords, setCoords] = useState({ top: 0, left: 0 });

	useLayoutEffect(() => {
		if (!isOpen || !contentRef.current) return;

		if (absolutePositionOrigin) {
			setCoords({
				top: absolutePositionOrigin.vertical,
				left: absolutePositionOrigin.horizontal,
			});
			return;
		}

		if (anchorElement) {
			const anchorRect = anchorElement.getBoundingClientRect();
			const contentRect = contentRef.current.getBoundingClientRect();

			let top = anchorRect.top + window.scrollY;
			let left = anchorRect.left + window.scrollX;

			const vert = positionOrigin?.vertical || "right";

			if (vert === "bottom") {
				top += anchorRect.height;
			} else if (vert === "center") {
				top += anchorRect.height / 2 - contentRect.height / 2;
			} else if (vert === "top") {
				top -= contentRect.height;
			}

			const horiz = positionOrigin?.horizontal || "left";

			if (horiz === "right") {
				if (positionOrigin?.includeTriggerSize) {
					left += anchorRect.width / 2;
				} else {
					left += anchorRect.width;
				}
			} else if (horiz === "center") {
				left += anchorRect.width / 2 - contentRect.width / 2;
			} else if (horiz === "left") {
				if (positionOrigin?.includeTriggerSize) {
					left -= contentRect.width - anchorRect.width / 2;
				} else {
					left -= contentRect.width;
				}
			}

			setCoords({ top, left });
		}
	}, [isOpen, anchorElement, positionOrigin, absolutePositionOrigin]);

	if (!isOpen) return null;

	return createPortal(
		<div
			ref={contentRef}
			className={className}
			style={{
				...contentStyles,
				top: coords.top,
				left: coords.left,
			}}
			onMouseEnter={handleOpen}
			onMouseLeave={handleClose}
		>
			{children}
		</div>,
		document.body
	);
}
