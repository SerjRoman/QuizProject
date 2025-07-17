import { FilterBlock, Icons, MenuButton, Modal } from "@/shared/ui";
import styles from "./show-more-modal.module.css";

export function ShowMoreModal({
	isOpen,
	onClose,
	title,
	children,
	onAdd,
}: {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
	onAdd: () => void;
}) {
	return (
		<Modal
			className={styles.modal}
			isOpen={isOpen}
			onClose={onClose}
			doCloseOnClickOutside={false}
		>
			<div className={styles.closeIcon}>
				<Icons.Cross onClick={onClose} />
			</div>
			<div className={styles.main}>
				<h1 className={styles.header}>Add more {title}</h1>
				<FilterBlock>{children}</FilterBlock>
				<MenuButton title={"Add"} onClick={onAdd} enabled className={styles.button} />
			</div>
		</Modal>
	);
}
