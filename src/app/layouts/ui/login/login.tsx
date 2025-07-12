import { Outlet } from "react-router-dom";
import { BaseLayout } from "../base";

export function LoginLayout() {
	return (
		<BaseLayout bgImage="/src/assets/logininBg.png">
		<div>
			<Outlet />
		</div>
		</BaseLayout>
	);
}
