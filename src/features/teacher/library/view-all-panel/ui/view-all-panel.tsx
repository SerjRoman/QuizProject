import { useModal } from "@/shared/lib";
import { Icons, MenuButton } from "@/shared/ui";
import { CreateQuizModal } from "../../create-quiz-modal";
import styles from "./view-all-panel.module.css";

export function ViewAllPanel() {
	const [{ open: openModal }, ModalWrapper] = useModal();
	return (
		<div className={styles.panel}>
			<h1>AllPanel</h1>
			<MenuButton
				className={styles.button}
				title={"Create new quiz"}
				iconRight={<Icons.Plus />}
				enabled
				onClick={openModal}
			/>
			<ModalWrapper ModalComponent={CreateQuizModal} />
		</div>
	);
}
