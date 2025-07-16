import { setSort } from "@/entities/quiz";
import { useAppDispatch } from "@/shared/lib";
import styles from "./cell.module.css";

export function SortQuizzesHeaderCell() {
	const dispatch = useAppDispatch();
	return (
		<tr className={styles.row}>
			<th className={styles.headingOrder}>
				<button
					onClick={() => {
						dispatch(setSort("name"));
					}}
					className={styles.buttonOrder}
				>
					Activity name
				</button>
			</th>
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
		</tr>
	);
}
