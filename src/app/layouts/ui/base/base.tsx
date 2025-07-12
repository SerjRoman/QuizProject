import {clsx} from "clsx";

import { Outlet } from "react-router-dom";
import styles from "./base.module.css";

export function BaseLayout(bgImage) {
	return (
		<div className={clsx(styles.main,)}>
			<Outlet />
		</div>
	);
}
