import type { RouteObject } from "react-router-dom";
import { PrivateRoute } from "@/entities/user";
import { PrivateRoutes } from "./private.routes";
import { PublicRoutes } from "./public.routes";

export const AppRoutes: RouteObject[] = [
	{
		children: [PublicRoutes],
	},
	{
		path: "/dashboard",
		element: <PrivateRoute />,
		children: [PrivateRoutes],
	},
];
