import { clsx } from "clsx";
import {
	createContext,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from "react";
import type {
	IActiveContext,
	ITabPanelProps,
	ITabProps,
	ITabsContext,
	ITabsProps,
} from "./tabs.types";

const TabsContext = createContext<ITabsContext | null>(null);
const TabListContext = createContext<IActiveContext | null>(null);

const useTabsContext = () => {
	const ctx = useContext(TabsContext);
	if (!ctx) throw new Error("TabsContext is not provided");
	return ctx;
};

const useTabListContext = () => {
	const ctx = useContext(TabListContext);
	if (!ctx) throw new Error("ActiveTabsContext is not provided");
	return ctx;
};

export function Tabs({ defaultTab, children, onTabChange }: ITabsProps) {
	const [activeTab, setActiveTab] = useState(defaultTab);
	useEffect(() => {
		if (!onTabChange) return;
		onTabChange();
	}, [activeTab, onTabChange]);
	return (
		<TabsContext value={{ activeTab, setActiveTab }}>
			{children}
		</TabsContext>
	);
}

export function TabList({
	activeClassName,
	defaultClassName,
	TabsClassName,
	children,
}: IActiveContext & { children: ReactNode }) {
	return (
		<TabListContext
			value={{
				activeClassName,
				defaultClassName,
				TabsClassName,
			}}
		>
			<div className={TabsClassName}>{children}</div>
		</TabListContext>
	);
}

export function Tab({ name, title }: ITabProps) {
	const { activeTab, setActiveTab } = useTabsContext();
	const { activeClassName, defaultClassName } = useTabListContext();
	const isActive = activeTab === name;

	return (
		<div
			onClick={() => setActiveTab(name)}
			className={clsx(defaultClassName, isActive && activeClassName)}
		>
			{title}
		</div>
	);
}

export function TabPanel({ name, children }: ITabPanelProps) {
	const { activeTab } = useTabsContext();

	if (activeTab !== name) return null;
	return <>{children}</>;
}
