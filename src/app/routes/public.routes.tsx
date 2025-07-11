import type { RouteObject } from "react-router-dom";
import { LoginLayout } from "@/pages/layouts";
import App from "../App";

export const PublicRoutes: RouteObject = {
	path: "/",
	children: [
		{
			path: "",
			element: <App/>,
		},
		{
			path: "login",
			element: <LoginLayout />,
			children: [{ path: "", element: (() => <h1>Login</h1>)() }],
		},
	],
};
