import type { PropsWithChildren } from "react";

export interface PopoverProps extends PropsWithChildren {
	showOn: "hover" | "click";
	positionOrigin?: {
		vertical?: "center" | "top" | "bottom";
		horizontal?: "center" | "left" | "right";
		includeTriggerSize?: boolean;
	};
	absolutePositionOrigin?: {
		vertical: number;
		horizontal: number;
	};
	anchorElement?: HTMLElement | null;
}
