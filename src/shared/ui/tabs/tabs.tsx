import { clsx } from "clsx";
import {
	Children,
	cloneElement,
	createContext,
	isValidElement,
	useContext,
	useState,
	type ReactNode,
} from "react";
import styles from "./tabs.module.css"
import type { ITabProps, ITabsContext, ITabsProps } from "./tabs.types";

const TabsContext = createContext<ITabsContext | null>(null);

const useTabsContext = () => {
	const ctx = useContext(TabsContext);
	if (!ctx) throw new Error("TabsContext  is not provided");
	return ctx;
};

export function Tabs({ defaultTab, children, onChange }: ITabsProps) {
	const [activeTab, setActiveTab] = useState(defaultTab);

	const getTabsProps = () => ({
		activeTab,
		setActiveTab: (tab: string) => {
			setActiveTab(tab);
			onChange?.();
		},
		onChange,
	});

	return (
		<TabsContext.Provider value={{ getTabsProps }}>
			<div>{children}</div>
		</TabsContext.Provider>
	);
}

export function Tab({ name, title }: ITabProps) {
	const { getTabsProps } = useTabsContext();
	const { activeTab, setActiveTab } = getTabsProps();

	return (
		<button
			onClick={() => setActiveTab(name)}
			className={clsx(styles.default, name === activeTab && "active")}
		>
			{title}
		</button>
	);
}

export function TabList({
	children,
	activeTabClassName,
	className,
}: {
	children: ReactNode;
	activeTabClassName: string;
	className: string;
}) {
	const mappedChildren = Children.map(children, (child) => {
		return isValidElement(child)
			? cloneElement(child, { className: activeTabClassName } as {
					className: string;
			  })
			: undefined;
	});
	return <div className={className}>{mappedChildren}</div>;
}
export function TabPanel({
	name,
	children,
}: {
	name: string;
	children: ReactNode;
}) {
	const { getTabsProps } = useTabsContext();
	const { activeTab } = getTabsProps();

	if (activeTab !== name) return null;
	return <div>{children}</div>;
}
