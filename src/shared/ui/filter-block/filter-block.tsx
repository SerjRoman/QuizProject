import { clsx } from "clsx";
import styles from "./filter-block.module.css";
import type { IFilterBlockProps } from "./filter-block.types";
export function FilterBlock(props: IFilterBlockProps) {
	const { title, children, onShowMore, className, showMoreClassName } = props;
	return (
		<div
			className={clsx(styles.filterBlock, className)}
			style={{ paddingTop: title && 20 }}
		>
			{title && <span className={styles.title}>{title}</span>}
			<div className={styles.content}>{children}</div>
			<p
				className={clsx(styles.showMore, showMoreClassName)}
				onClick={onShowMore}
			>
				Show more
			</p>
		</div>
	);
}
