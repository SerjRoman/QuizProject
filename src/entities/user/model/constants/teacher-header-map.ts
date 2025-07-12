import { ADMIN_HEADER_NAVIGATION_MAP } from "@/shared/model/constants";
import { Icons } from "@/shared/ui";

export const TEACHER_HEADER_MAP = [
	{
		path: ADMIN_HEADER_NAVIGATION_MAP.libraries,
		title: "Libraries",
		icon: Icons.Library,
		dataSoruce: ["All", "Created", "Copied", "Folders", "Favourite"],
	},
	{
		path: ADMIN_HEADER_NAVIGATION_MAP.reports,
		title: "Reports",
		icon: Icons.Library,
		dataSoruce: ["All", "Class", "Room", "Quiz", "Favourite", "Custom"],
	},
	{
		path: ADMIN_HEADER_NAVIGATION_MAP.classes,
		title: "Classes",
		icon: Icons.Library,
		dataSoruce: ["All", "Favourite"],
	},
	{
		path: ADMIN_HEADER_NAVIGATION_MAP.community,
		title: "Community",
		icon: Icons.Library,
	},
];
