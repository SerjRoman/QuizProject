import { Outlet } from "react-router-dom";
import { TeacherHeader } from "@/widgets/header";
import { BaseLayout } from "../base";
import styles from "./teacher.module.css"

export function TeacherLayout() {
	return (
		<BaseLayout bgImage="/src/assets/adminBg.png">
			<div className={styles.main}>
				<TeacherHeader />
				<main>
					<Outlet />
				</main>
			</div>
		</BaseLayout>
	);
}
