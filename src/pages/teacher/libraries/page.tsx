import {
	ViewAllPanel,
	ViewCreatedPanel,
	ViewCopiedPanel,
} from "@/widgets/library";
import { clearFilters } from "@/entities/quiz";
import { useAppDispatch } from "@/shared/lib";
import { Tab, TabList, TabPanel, Tabs } from "@/shared/ui";
import styles from "./page.module.css";

export function LibraryPage() {
	const dispatch = useAppDispatch();
	return (
		<div className={styles.container}>
			<Tabs
				defaultTab="all"
				onTabChange={() => {
					dispatch(clearFilters());
				}}
			>
				<TabList
					TabsClassName={styles.tabs}
					activeClassName={styles.active}
					defaultClassName={styles.base}
				>
					<Tab title={"All"} name={"all"} />
					<Tab title={"Created"} name={"created"} />
					<Tab title={"Copied"} name={"copied"} />
					<Tab title={"Folders"} name={"folders"} />
					<Tab title={"Favourite"} name={"favourite"} />
				</TabList>
				<TabPanel name={"all"}>
					<ViewAllPanel />
				</TabPanel>
				<TabPanel name={"created"}>
					<ViewCreatedPanel />
				</TabPanel>
				<TabPanel name={"copied"}>
					<ViewCopiedPanel />
				</TabPanel>
				{/* <TabPanel name={"folders"}>
					<ViewFoldersPanel />
				</TabPanel>
				<TabPanel name={"favourite"}>
					<ViewFavouritePanel />
				</TabPanel> */}
			</Tabs>
		</div>
	);
}
