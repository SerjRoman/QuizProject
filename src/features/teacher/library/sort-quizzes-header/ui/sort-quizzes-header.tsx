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
			<th className={styles.headingOrder}>
				<button
					onClick={() => {
						dispatch(setSort("date"));
					}}
					className={styles.buttonOrder}
				>
					Creation date
				</button>
			</th>
			<th></th>
		</div>
	);
}
