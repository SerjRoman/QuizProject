import { setSort } from "@/entities/quiz";
import { useAppDispatch } from "@/shared/lib";
import styles from "./sort-quizzes-header.module.css";

export function SortQuizzesHeader() {
	const dispatch = useAppDispatch();
	return (
		<div className={styles.item}>
			<div className={styles.headingOrder}>
				<button
					onClick={() => {
						dispatch(setSort("name"));
					}}
					className={styles.buttonOrder}
				>
					Activity name
				</button>
			</div>
			<div className={styles.headingOrder}>
				<button
					onClick={() => {
						dispatch(setSort("date"));
					}}
					className={styles.buttonOrder}
				>
					Creation date
				</button>
			</div>
			<span className={styles.ownerText}>Owner</span>
		</div>
	);
}
