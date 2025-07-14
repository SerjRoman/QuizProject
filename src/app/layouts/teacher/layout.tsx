import { Outlet } from "react-router-dom";
import { TeacherHeader } from "@/widgets/header";
import { BaseLayout } from "../base";
import styles from "./layout.module.css";

export function TeacherLayout() {
	return (
		<BaseLayout bgImage="/src/assets/authBg.png">
			<TeacherHeader />
			<main className={styles.main}>
				<Outlet />
			</main>
		</BaseLayout>
	);
}
