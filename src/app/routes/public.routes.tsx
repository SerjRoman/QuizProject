import type { RouteObject } from "react-router-dom";
import { RoomLayout } from "@/app/layouts";
import App from "../App";

export const PublicRoutes: RouteObject = {
	path: "/",
	children: [
		{
			path: "",
			element: <App />,
		},
		{
			path: "login",
			element: <RoomLayout />,
			children: [{ path: "", element: (() => <h1>Login</h1>)() }],
		},
	],
};
