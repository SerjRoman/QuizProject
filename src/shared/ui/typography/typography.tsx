import { clsx } from "clsx";
import { Body, FooterSmallBody, FunkyBody, FunkyHeading, Heading, SmallBody, SubHeading, VerySmallBody } from "./components";
import styles from "./styles.module.css";

import type { TypographyProps } from "./typograpty.types";


// <Typography className>dasdadad</Typography> 


// Typography.FunkyHeading
// Typography.Heading
// Typography.SubHeading
// Typography.Body
// Typography.FunkyBody
// Typography.SmallBody
// Typography.VerySmallBody
// Typography.FooterSmallBody

export function Typography({ children, className, ...props }: TypographyProps) {
	return <span className={clsx(styles.main, className)} {...props}>{children}</span>;
}


Typography.FunkyHeading = FunkyHeading;
Typography.Heading = Heading;
Typography.SubHeading = SubHeading;
Typography.FunkyBody = FunkyBody;
Typography.Body = Body;
Typography.SmallBody = SmallBody;
Typography.VerySmallBody = VerySmallBody;
Typography.FooterSmallBody = FooterSmallBody;

