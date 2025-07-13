import {
	ViewAllPanel,
	ViewCopiedPanel,
	ViewCreatedPanel,
	ViewFavouritePanel,
	ViewFoldersPanel,
} from "@/features/teacher";
import { Tab, TabList, TabPanel, Tabs } from "@/shared/ui/tabs/tabs";
import styles from "./libraries.module.css";

export function Libraries() {
	return (
		<div className={styles.container}>
			<Tabs className={styles.container} defaultTab="all">
				<TabList
					TabsClassName={styles.tabs}
					activeClassName={styles.active}
					defaultClassName={styles.default}
					className={styles.base}
				>
					<Tab title={"All"} name={"all"} />
					<Tab title={"Created"} name={"created"} />
					<Tab title={"Copied"} name={"copied"} />
					<Tab title={"Folders"} name={"folders"} />
					<Tab title={"Favourite"} name={"favourite"} />
				</TabList>
				<TabPanel className={styles.tabPanel} name={"all"}>
					<ViewAllPanel />
				</TabPanel>
				<TabPanel className={styles.tabPanel} name={"created"}>
					<ViewCreatedPanel />
				</TabPanel>
				<TabPanel className={styles.tabPanel} name={"copied"}>
					<ViewCopiedPanel />
				</TabPanel>
				<TabPanel className={styles.tabPanel} name={"folders"}>
					<ViewFoldersPanel />
				</TabPanel>
				<TabPanel className={styles.tabPanel} name={"favourite"}>
					<ViewFavouritePanel />
				</TabPanel>
			</Tabs>
		</div>
	);
}
