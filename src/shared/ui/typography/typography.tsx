import { clsx } from "clsx";
import {
	Body,
	FooterSmallBody,
	FunkyBody,
	FunkyHeading,
	Heading,
	SmallBody,
	SubHeading,
	VerySmallBody,
} from "./components";
import styles from "./components/styles.module.css";

import type { TypographyProps } from "./typograpty.types";

/**
 * Base Typography component.
 *
 * It serves as a namespace for all text variants in the application.
 * You can use it directly as a generic wrapper or access specific styles via dot notation.
 *
 * @example
 * // Standard usage
 * <Typography.Heading>Page Title</Typography.Heading>
 * <Typography.Body>Some regular text content.</Typography.Body>
 *
 * // Generic usage (applies base styles)
 * <Typography className="custom-class">Generic Text</Typography>
 */
export function Typography({ children, className, ...props }: TypographyProps) {
	return (
		<span className={clsx(styles.main, className)} {...props}>
			{children}
		</span>
	);
}

Typography.FunkyHeading = FunkyHeading;
Typography.Heading = Heading;
Typography.SubHeading = SubHeading;
Typography.FunkyBody = FunkyBody;
Typography.Body = Body;
Typography.SmallBody = SmallBody;
Typography.VerySmallBody = VerySmallBody;
Typography.FooterSmallBody = FooterSmallBody;
