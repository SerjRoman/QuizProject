import {
	ViewAllPanel,
	ViewCopiedPanel,
	ViewCreatedPanel,
	ViewFavouritePanel,
	ViewFoldersPanel,
} from "@/features/teacher";
import { Tab, TabList, Tabs } from "@/shared/ui/tabs/tabs";

export function Libraries() {
	return (
		<Tabs>
			<TabList>
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
