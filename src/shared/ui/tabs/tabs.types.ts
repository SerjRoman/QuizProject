import type { PropsWithChildren, ReactNode } from "react";

export interface ITabProps {
	title: string;
	name: string;
}

export interface ITabPanelProps {
	name: string;
	children: ReactNode;
}

export interface ITabsProps extends PropsWithChildren {
	defaultTab?: string;
	onTabChange?: () => void;
}

export interface ITabsContext {
	activeTab?: string;
	setActiveTab: (tab: string) => void;
}

export interface IActiveContext {
	activeClassName: string;
	defaultClassName: string;
	TabsClassName: string;
}
