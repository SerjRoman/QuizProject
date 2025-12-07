import { setSort } from "@/entities/quiz";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { Icons } from "@/shared/ui";
import styles from "./sort-quizzes-header.module.css";

export function SortQuizzesHeader() {
	const dispatch = useAppDispatch();
	const sort = useAppSelector((state) => state.quizFilters.sort);
	function getOrder(field: typeof sort.field) {
		return sort.field === field && sort.order;
	}
	return (
		<div className={styles.item}>
			<div className={styles.headingOrder}>
				<button
					onClick={() => {
						dispatch(setSort("title"));
					}}
					className={styles.buttonOrder}
				>
					Activity name
					{getOrder("title") === "desc" ? (
						<Icons.ArrowUp />
					) : (
						<Icons.ArrowDown />
					)}
				</button>
			</div>
			<div className={styles.headingOrder}>
				<button
					onClick={() => {
						dispatch(setSort("createdAt"));
					}}
					className={styles.buttonOrder}
				>
					Creation date
					{getOrder("createdAt") === "desc" ? (
						<Icons.ArrowUp />
					) : (
						<Icons.ArrowDown />
					)}
				</button>
			</div>
			<span className={styles.ownerText}>Owner</span>
		</div>
	);
}
