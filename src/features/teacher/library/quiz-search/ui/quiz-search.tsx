import { setSearch } from "@/entities/quiz";
import { useAppDispatch } from "@/shared/lib";
import { Icons, Input } from "@/shared/ui";
import styles from "./quiz-search.module.css";

export function QuizSearch() {
	const dispatch = useAppDispatch();
	return (
		<Input
			placeholder="Start typing..."
			iconRight={<Icons.Search className={styles.icon} />}
			className={styles.search}
			onChange={(e) => {
				dispatch(setSearch({ search: e.target.value }));
			}}
		/>
	);
}
