import {
	ViewAllPanel,
	ViewCopiedPanel,
	ViewCreatedPanel,
	ViewFavouritePanel,
	ViewFoldersPanel,
} from "@/features/teacher";
import { Tab, TabList, Tabs } from "@/shared/ui/tabs/tabs";
import styles from "./libraries.module.css"

export function Libraries() {
	return (
		<Tabs>
			<TabList activeClassName={styles.active} defaultClassName={styles.default}>
				<Tab title={"All"} name={"all"} />
				<Tab title={"Created"} name={"created"} />
				<Tab title={"Copied"} name={"copied"} />
				<Tab title={"Folders"} name={"folders"} />
				<Tab title={"Favourite"} name={"favourite"} />
			</TabList>
			<ViewAllPanel />
			<ViewCreatedPanel />
			<ViewCopiedPanel />
			<ViewFoldersPanel />
			<ViewFavouritePanel />
		</Tabs>
	);
}
