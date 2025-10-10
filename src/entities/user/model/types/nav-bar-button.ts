import type { IconType } from "@/shared/ui/icons/icon.types";

export interface INavBarButton {
	id: string;
	path: string;
	title: string;
	iconLeft?: IconType;
	iconRight?: IconType;
	dataSource: { path: string; title: string }[];
}
