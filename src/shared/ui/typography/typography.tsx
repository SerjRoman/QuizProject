import { clsx } from "clsx";
import { FunkyHeading } from "./components";
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

export function Typography({ children, className }: TypographyProps) {
	return <span className={clsx(styles.main, className)}>{children}</span>;
}


Typography.FunkyHeading = FunkyHeading;
