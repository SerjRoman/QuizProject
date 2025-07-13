import type { PropsWithChildren } from "react";

export interface ITabProps {
    title: string;
    name: string;
}

export interface ITabsProps extends PropsWithChildren {
    defaultTab?: string;
    onChange: () => void;
}

type getTabsProps = {
    activeTab: string | undefined;
    setActiveTab: (tab: string) => void;
    onChange: () => void;
};

export interface ITabsContext {
    getTabsProps: () => getTabsProps;
}