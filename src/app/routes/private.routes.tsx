import type { RouteObject } from "react-router-dom";
import { TeacherLayout } from "@/app/layouts";
import { StudentRoutes } from "./student.routes";
import { TeacherRoutes } from "./teacher.routes";

export const PrivateRoutes: RouteObject = {
	element: <TeacherLayout />,
	path: "",
	children: [
		TeacherRoutes,
		StudentRoutes
	],
};
