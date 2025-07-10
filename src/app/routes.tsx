import { LoginLayout, AdminLayout } from "@/pages/layouts";
import App from "./App";

export const routes = [
	{
		element: <LoginLayout />,
		children: [
			{
				path: "/",
				element: <App />,
			},
		],
	},
	{
		element: <AdminLayout />,
		children: [
			{
				path: "/admin",
				element: <App />,
			},
		],
	},
];
