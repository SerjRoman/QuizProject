import { QuizzesPanel } from "@/widgets/library";

export function ViewFavouritePanel() {
	return <QuizzesPanel queryArgs={{ from: "favourite" }} />;
}
