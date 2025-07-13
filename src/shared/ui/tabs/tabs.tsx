import { clsx } from "clsx";
import { createContext, useContext, useState, type ReactNode } from "react";
import type {
	IActiveContext,
	ITabPanelProps,
	ITabProps,
	ITabsContext,
	ITabsProps,
} from "./tabs.types";

const TabsContext = createContext<ITabsContext | null>(null);
const ActiveContext = createContext<IActiveContext | null>(null);

const useTabsContext = () => {
	const ctx = useContext(TabsContext);
	if (!ctx) throw new Error("TabsContext is not provided");
	return ctx;
};

const useActiveContext = () => {
	const ctx = useContext(ActiveContext);
	if (!ctx) throw new Error("TabsContext is not provided");
	return ctx;
};

export function Tabs({ defaultTab, children, className }: ITabsProps) {
	const [activeTab, setActiveTab] = useState(defaultTab);

	return (
		<TabsContext value={{ activeTab, setActiveTab, className }}>
			{children}
		</TabsContext>
	);
}

export function TabList({
	activeClassName,
	defaultClassName,
	TabsClassName,
    className,
	children,
}: IActiveContext & { children: ReactNode }) {
	return (
		<ActiveContext value={{ activeClassName, defaultClassName, TabsClassName, className }}>
			<div className={TabsClassName}>{children}</div>
		</ActiveContext>
	);
}

export function Tab({ name, title }: ITabProps) {
	const { activeTab, setActiveTab } = useTabsContext();
	const { activeClassName, defaultClassName, className } = useActiveContext();
	const isActive = activeTab === name;

	return (
		<div
			onClick={() => setActiveTab(name)}
			className={clsx(
				className,
				isActive ? activeClassName : defaultClassName
			)}
		>
			{title}
		</div>
	);
}

export function TabPanel({ name, children, className }: ITabPanelProps) {
	const { activeTab } = useTabsContext();

	if (activeTab !== name) return null;
	return <div className={className}>{children}</div>;
}
