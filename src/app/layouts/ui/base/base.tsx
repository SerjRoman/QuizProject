import { clsx } from "clsx";
import styles from "./base.module.css";
import type { IBaseLayoutProps } from "./base.types";

export function BaseLayout({ bgImage, children }: IBaseLayoutProps) {
	return (
		<div
			className={clsx(styles.main)}
			style={{ backgroundImage: bgImage && `url(${bgImage})` }}
		>
			{children}
		</div>
	);
}
