import { clsx } from "clsx";
import styles from "./filter-block.module.css";
import type { IFilterBlockProps } from "./filter-block.types";

export function FilterBlock(props: IFilterBlockProps) {
	const { title, children, actions, className } = props;
	return (
		<fieldset
			className={clsx(styles.filterBlock, className)}
			style={{ paddingTop: title && 20 }}
		>
			<legend className={styles.title}>{title}</legend>
			<div className={styles.content}>{children}</div>
			<div className={styles.actionsBlock}>{actions}</div>
		</fieldset>
	);
}
