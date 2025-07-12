import type { RouteObject } from "react-router-dom";
import App from "../App";

export const StudentRoutes: RouteObject = {
	path: "student",
	children: [
		{
			path: "dashboard",
			children: [
				{
					path: "",
					element: <App />,
				},
			],
		},
	],
};
