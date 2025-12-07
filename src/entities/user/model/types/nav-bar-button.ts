import type { IconType } from "@/shared/lib";
export interface NavBarButton {
	path: string;
	title: string;
	iconLeft?: IconType;
	iconRight?: IconType;
	dataSource: { path: string; title: string }[];
}
