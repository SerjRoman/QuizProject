import { TeacherLibrary } from "@/widgets/library";
import styles from "./page.module.css";

export function TeacherLibraryPage() {
	return (
		<div className={styles.container}>
			<TeacherLibrary />
		</div>
	);
}
