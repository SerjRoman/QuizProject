import { clsx } from "clsx";
import { createContext, useContext, useState, type PropsWithChildren, type ReactNode } from "react";
import type { ITabProps, ITabsContext, ITabsProps } from "./tabs.types";

const TabsContext = createContext<ITabsContext | null>(null);

const useTabsContext = () => {
	const ctx = useContext(TabsContext);
	if (!ctx) throw new Error("TabsContext is not provided");
	return ctx;
};

export function Tabs({ defaultTab, children }: ITabsProps) {
	const [activeTab, setActiveTab] = useState(defaultTab);

	return (
		<TabsContext.Provider value={{ activeTab, setActiveTab }}>
			<>{children}</>
		</TabsContext.Provider>
	);
}

export function TabList({ children }: PropsWithChildren) {
	return <div>{children}</div>;
}

export function Tab({ name, title }: ITabProps) {
	const { activeTab, setActiveTab } = useTabsContext();
	const isActive = activeTab === name;

	return (
		<div
			onClick={() => setActiveTab(name)}
			className={clsx("tab", isActive && "active")}
		>
			{title}
		</div>
	);
}

export function TabPanel({
	name,
	children,
}: {
	name: string;
	children: ReactNode;
}) {
	const { activeTab } = useTabsContext();

	if (activeTab !== name) return null;
	return <>{children}</>;
}

