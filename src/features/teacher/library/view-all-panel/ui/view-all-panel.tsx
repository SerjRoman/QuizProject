import { useState } from "react";
import { Icons, MenuButton } from "@/shared/ui";
import { CreateQuizModal } from "../../create-quiz-modal";
import styles from "./view-all-panel.module.css";

export function ViewAllPanel() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<div className={styles.panel}>
			<h1>AllPanel</h1>
			<MenuButton
				className={styles.button}
				title={"Create new quiz"}
				iconRight={<Icons.Plus />}
				enabled
				onClick={() => setIsModalOpen(true)}
			/>
			<CreateQuizModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</div>
	);
}
