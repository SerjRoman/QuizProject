import { Outlet } from "react-router-dom";
import { TeacherHeader } from "@/widgets/header";
import { BaseLayout } from "../base";


export function TeacherLayout() {
	return (
		<BaseLayout bgImage="/src/assets/authBg.png">
			<div >
				<TeacherHeader />
				<main>
					<Outlet />
				</main>
			</div>
		</BaseLayout>
	);
}
