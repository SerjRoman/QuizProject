import { Outlet } from "react-router-dom";
import { BaseLayout } from "../base";
import styles from "./login.module.css"

export function LoginLayout() {
	return (
		<BaseLayout bgImage="/src/assets/loginBg.png">
			<div className={styles.main}>
				<Outlet />
			</div>
		</BaseLayout>
	);
}
