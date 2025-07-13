import { ViewAllPanel, ViewCopiedPanel, ViewCreatedPanel, ViewFavouritePanel, ViewFoldersPanel } from "@/features/teacher";
import { Tab, TabList, Tabs } from "@/shared/ui/tabs/tabs";

export function Libraries() {
	return (
		<Tabs onChange={function (): void {
            throw new Error("Function not implemented.");
        } }>
			<TabList activeTabClassName={"active"} className={""}>
				<Tab title={"All"} name={"all"}></Tab>
                <Tab title={"Created"} name={"created"} ></Tab>
                <Tab title={"Copied"} name={"copied"} ></Tab>
                <Tab title={"Folders"} name={"folders"} ></Tab>
                <Tab title={"Favourite"} name={"favourite"} ></Tab>
			</TabList>
            <ViewAllPanel/>
            <ViewCreatedPanel/>
            <ViewCopiedPanel/>
            <ViewFoldersPanel/>
            <ViewFavouritePanel/>
		</Tabs>
	);
}
