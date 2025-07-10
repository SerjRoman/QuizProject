import { Outlet } from "react-router-dom";
import styles from "./login.module.css";

export function LoginLayout() {
	return (
		<div className={styles.main}>
			<Outlet />
		</div>
	);
}
