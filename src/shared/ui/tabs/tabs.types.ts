import type { PropsWithChildren } from "react";

export interface ITabProps {
	title: string;
	name: string;
}

export interface ITabsProps extends PropsWithChildren {
	defaultTab?: string;
}


export interface ITabsContext {
	activeTab?: string;
	setActiveTab: (tab: string) => void;
}
