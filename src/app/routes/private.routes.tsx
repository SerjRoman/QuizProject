import type { RouteObject } from "react-router-dom";
import { AdminLayout } from "@/pages/layouts";
import { StudentRoutes } from "./student.routes";
import { TeacherRoutes } from "./teacher.routes";

export const PrivateRoutes: RouteObject = {
	element: <AdminLayout />,
	path: "",
	children: [
		TeacherRoutes,
		StudentRoutes
	],
};
