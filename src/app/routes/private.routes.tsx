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
					path: "libraries",
					children: [
						{
							path: "",
							element: <App />,
						},
					],
				},
				{
					path: "reports",
					children: [
						{
							path: "",
							element: <App />,
						},
					],
				},
				{
					path: "classes",
					children: [
						{
							path: "",
							element: <App />,
						},
					],
				},
				{
					path: "community",
					children: [
						{
							path: "",
							element: <App />,
						},
					],
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
	],
};
