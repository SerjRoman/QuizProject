import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TypographyProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLSpanElement>,
		HTMLSpanElement
	> {
        children?: ReactNode;
		
    }
