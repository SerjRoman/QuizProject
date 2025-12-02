import { TEACHER_HEADER_NAVIGATION_MAP } from "@/shared/model";
import { Icons } from "@/shared/ui";
import type { NavBarButton } from "../types/nav-bar-button";

export const TEACHER_HEADER_MAP: NavBarButton[] = [
	{
		path: TEACHER_HEADER_NAVIGATION_MAP.libraries,
		title: "Libraries",
		iconLeft: Icons.Library,
		iconRight: Icons.ArrowDown,
		dataSource: [
			{
				path: "",
				title: "All",
			},
			{
				path: "",
				title: "Created",
			},
			{
				path: "",
				title: "Copied",
			},
			{
				path: "",
				title: "Folders",
			},
			{
				path: "",
				title: "Favourite",
			},
		],
	},
	{
		path: TEACHER_HEADER_NAVIGATION_MAP.reports,
		title: "Reports",
		iconLeft: Icons.Library,
		iconRight: Icons.ArrowDown,
		dataSource: [
			{
				path: "",
				title: "All",
			},
			{
				path: "",
				title: "Class",
			},
			{
				path: "",
				title: "Room",
			},
			{
				path: "",
				title: "Quiz",
			},
			{
				path: "",
				title: "Favourite",
			},
			{
				path: "",
				title: "Custom",
			},
		],
	},
	{
		path: TEACHER_HEADER_NAVIGATION_MAP.classes,
		title: "Classes",
		iconLeft: Icons.Library,
		iconRight: Icons.ArrowDown,
		dataSource: [
			{
				path: "",
				title: "All",
			},
			{
				path: "",
				title: "Created",
			},
		],
	},
	{
		path: TEACHER_HEADER_NAVIGATION_MAP.community,
		title: "Community",
		iconLeft: Icons.Library,
		dataSource: [{ path: "", title: "" }],
	},
];
