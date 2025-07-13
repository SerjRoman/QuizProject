import type { PropsWithChildren, ReactNode } from "react";

export interface ITabProps {
	title: string;
	name: string;
}

export interface ITabPanelProps {
    name: string;
    children: ReactNode;
    className: string;
}

export interface ITabsProps extends PropsWithChildren {
	defaultTab?: string;
    className: string;
}


export interface ITabsContext {
	activeTab?: string;
	setActiveTab: (tab: string) => void;
    className: string;
}

export interface IActiveContext {
    activeClassName: string;
    defaultClassName: string;
    TabsClassName: string;
    className:string;
}
