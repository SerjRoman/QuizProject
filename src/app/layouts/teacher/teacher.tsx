import { Outlet } from "react-router-dom";
import { TeacherHeader } from "@/widgets/header";
import { BaseLayout } from "../base";

export function TeacherLayout() {
	return (
		<BaseLayout bgImage="/src/assets/authBg.png">
			<TeacherHeader />
			<main>
				<Outlet />
			</main>
		</BaseLayout>
	);
}
