import type { RouteObject } from "react-router-dom";
import { Libraries } from "@/pages/teacher";
import App from "../App";

export const TeacherRoutes: RouteObject = {
	path: "teacher",
	children: [
		{
            path: "dashboard",
			children: [
				{
					path: "libraries",
					children: [
						{
                            path:"",
							element: <Libraries />,
						},
					],
				},
				{
					path: "reports",
					children: [
						{
                            path:"",
							element: <App />,
						},
					],
				},
				{
					path: "classes",
					children: [
						{
                            path:"",
							element: <App />,
						},
					],
				},
				{
					path: "community",
					children: [
						{
                            path:"",
							element: <App />,
						},
					],
				},
			],
		},
	],
};
