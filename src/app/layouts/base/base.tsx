import type { ReactNode } from "react";

import styles from "./base.module.css";

export interface IBaseLayoutProps {
	bgImage?: string;
	children?: ReactNode;
}

export function BaseLayout({ bgImage, children }: IBaseLayoutProps) {
	return (
		<div
			className={styles.main}
			style={{ backgroundImage: bgImage && `url(${bgImage})` }}
		>
			{children}
		</div>
	);
}
