import { clsx } from "clsx";
import { Icons } from "../icons";
import styles from "./paginate.module.css";
import type { IPaginateProps } from "./paginate.types";

export function Paginate(props: IPaginateProps) {
	const { currentPage, totalPages, setPage, className } = props;
	if (!totalPages) return;
	const pageNumbers: number[] = [];
	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i);
	}
	const goBackPageNumber =
		currentPage - 1 > 0 ? currentPage - 1 : currentPage;
	const goForthPageNumber =
		currentPage + 1 <= totalPages ? currentPage + 1 : currentPage;

	function goBackPage() {
		setPage(goBackPageNumber);
	}
	function goForthPage() {
		setPage(goForthPageNumber);
	}
	function handleChangePage(page: number) {
		setPage(page);
	}

	return (
		<nav className={className}>
			<ul className={styles.pageList}>
				<li onClick={goBackPage} className={styles.pageListItem}>
					<Icons.ArrowLeft className={styles.icon} />
				</li>
				{pageNumbers.map((pageNumber) => (
					<li
						key={pageNumber}
						className={clsx(
							styles.pageListItem,
							currentPage === pageNumber && styles.activePage
						)}
						onClick={() => {
							handleChangePage(pageNumber);
						}}
					>
						{pageNumber}
					</li>
				))}
				<li onClick={goForthPage} className={styles.pageListItem}>
					<Icons.ArrowRight className={styles.icon} />
				</li>
			</ul>
		</nav>
	);
}
