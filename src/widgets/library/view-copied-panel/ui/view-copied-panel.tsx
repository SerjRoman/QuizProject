import { QuizzesPanel } from "@/widgets/library";

export function ViewCopiedPanel() {
	return <QuizzesPanel queryArgs={{ from: "copied" }} />;
}
