import type { RouteObject } from "react-router-dom";
import { RoomLayout } from "@/app/layouts";
import { JoinRoomPage } from "@/pages/join-room";
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
		{
			path: "join",
			element: <RoomLayout />,
			children: [{ path: "", element: <JoinRoomPage /> }],
		},
	],
};
