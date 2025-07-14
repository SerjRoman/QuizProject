import styles from "./library-filter-block.module.css";
import type { ILibraryFilterBlockProps } from "./library-filter-block.types";

export function LibraryFilterBlock(props: ILibraryFilterBlockProps) {
	const { filters } = props;

	return <div className={styles.container}>{filters}</div>;
}
