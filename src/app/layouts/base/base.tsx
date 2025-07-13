import styles from "./base.module.css";
import type { IBaseLayoutProps } from "./base.types";

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
