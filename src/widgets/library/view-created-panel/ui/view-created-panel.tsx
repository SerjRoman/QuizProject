import { QuizzesPanel } from "@/widgets/library";
import { QuizFilterByStatus, QuizFilterByVisibility } from "@/features/teacher";
import styles from "./view-created-panel.module.css";
export function ViewCreatedPanel() {
	return (
		<QuizzesPanel
			filters={
				<div className={styles.checkboxFilters}>
					<QuizFilterByStatus />
					<div className={styles.vl} />
					<QuizFilterByVisibility />
				</div>
			}
			queryArgs={{ from: "created" }}
		/>
	);
}
