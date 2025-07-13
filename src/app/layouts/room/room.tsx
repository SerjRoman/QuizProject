import { Outlet } from "react-router-dom";
import { BaseLayout } from "../base";

export function RoomLayout() {
	return (
		<BaseLayout bgImage="/src/assets/colorBubblesBg.png">
			<Outlet />
		</BaseLayout>
	);
}
