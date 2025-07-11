import type { RouteObject } from "react-router-dom";
import { AdminLayout } from "@/pages/layouts";
import App from "../App";

export const PrivateRoutes: RouteObject = {
	element: <AdminLayout />,
	path: "",
	children: [
		{
			path: "teacher",
			children: [
				{
					path: "dashboard",
					element: <App />,
				},
			],
		},
		{
			path: "student",
			children: [
				{
					path: "dashboard",
					element: <App />,
				},
			],
		},
		{
			path: "libraries",
			children: [
				{
					path: "dashboard",
					element: <App />,
				},
			],
		},
		{
			path: "reports",
			children: [
				{
					path: "dashboard",
					element: <App />,
				},
			],
		},
		{
			path: "classes",
			children: [
				{
					path: "dashboard",
					element: <App />,
				},
			],
		},
		{
			path: "community",
			children: [
				{
					path: "dashboard",
					element: <App />,
				},
			],
		},
	],
};
