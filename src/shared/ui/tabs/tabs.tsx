import {
	createContext,
	useContext,
	useState,
	type PropsWithChildren,
	type ReactNode,
} from "react";

// <Tabs >
//     <Tab.List>
//         <Tab name="created">Created</Tab>
//         <Tab name="all">All</Tab>
//         <Tab name="all">All</Tab>
//         <Tab name="all">All</Tab>
//     </Tab.List>
//     <TabPanel name="all"><AllPanel / ></TabPanel>
//     <TabPanel name="created"><AllPanel / ></TabPanel>
// </Tabs>

// interface Tab {
//   activeTabClassName: string;
// }

// function TabList({
//   children,
//   activeTabClassName,
//   className,
// }: {
//   children: ReactNode;
//   activeTabClassName: string;
//   defaultTabClassName: string;
//   className: string;
// }) {
//   const mappedChildren =
// Children.map
// (children, (child) => {
//     return isValidElement(child)
//       ? cloneElement(child, { className: activeTabClassName } as {
//           className: string;
//         })
//       : undefined;
//   });
//   return <div className={className}></div>;
// }

// <TabList>
//   <Tab></Tab>
// </TabList>;

export interface ITabProps {
	title: string;
	name: string;
	panel: ReactNode;
}

export interface ITabsProps extends PropsWithChildren {
	defaultTab?: string;
	onChange: () => void;
}

// context
type getTabsProps = {
	onChange: () => void;
};

export interface ITabsContext {
	getTabsProps: () => getTabsProps;
}

const TabsContext = createContext<ITabsContext | null>(null);

const useTabsContext = () => {
	const ctx = useContext(TabsContext);
	if (!ctx) {
		throw new Error("Ctx is not provided");
		return ctx;
	}
};

export function Tabs({ defaultTab, children }: ITabsProps) {
	const [activeTab, setActiveTab] = useState(defaultTab);

	const { getRadioProps } = useTabsContext();

	return <div></div>;
}

export function Tab(props: ITabProps) {
	// const { title, name, ...restProps } = props;
	// return (
	// 	<div>
	// 		<h2>{title}</h2>
	// 	</div>
	// );
	const { getTabsProps } = useTabsContext();
	const { activeTab, setActiveTab } = getTabsProps();

	return (
		<button
			onClick={() => setActiveTab(name)}
			className={clsx(name === activeTab && "active")}
		>
			{title}
		</button>
	);
}

// context
export function TabList() {
	return <div></div>;
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
