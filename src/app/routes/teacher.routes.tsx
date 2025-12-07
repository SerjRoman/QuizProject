import type { RouteObject } from "react-router-dom";
import { TeacherLibraryPage } from "@/pages/teacher-library";
import App from "../App";

export const TeacherRoutes: RouteObject = {
	path: "teacher",
	children: [
		{
			path: "dashboard",
			children: [
				{
					path: "library",
					children: [
						{
							path: "",
							element: <TeacherLibraryPage />,
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
	],
};
