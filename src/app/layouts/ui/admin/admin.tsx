import { Outlet } from "react-router-dom";
import { TeacherHeader } from "@/widgets/header";
import { BaseLayout } from "../base";

export function AdminLayout() {
	return (
		<BaseLayout bgImage="/src/assets/logininBg.png">
				<TeacherHeader />
				<main>
					<Outlet />
				</main>
		</BaseLayout>
	);
}
