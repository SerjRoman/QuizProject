import { Icons } from "@/shared/ui";

export const ADMIN_TABS_MAP = [
	{
		path: "/admin/libraries",
		title: "Libraries",
		icon: Icons.Library,
		dataSoruce: ["All", "Created", "Copied", "Folders", "Favourite"],
	},
	{
		path: "/admin/reports",
		title: "Reports",
		icon: Icons.Library,
		dataSoruce: ["All", "Class", "Room", "Quiz", "Favourite", "Custom"],
	},
	{
		path: "/admin/classes",
		title: "Classes",
		icon: Icons.Library,
		dataSoruce: ["All", "Favourite"],
	},
	{ path: "/admin/community", title: "Community", icon: Icons.Library },
];
