import type { RouteObject } from "react-router-dom";
import { JoinRoomPage } from "@/pages/join-room";
import { LoginLayout } from "@/pages/layouts";
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
			element: <LoginLayout />,
			children: [{ path: "", element: (() => <h1>Login</h1>)() }],
		},
		{
			path: "join",
			element: <LoginLayout />,
			children: [{ path: "", element: <JoinRoomPage /> }],
		},
	],
};
