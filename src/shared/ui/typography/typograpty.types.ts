import type { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";

export interface TypographyProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLSpanElement>,
		HTMLSpanElement
	> {
        chidren: ReactElement;
		
    }
