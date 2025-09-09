import { useState, type ChangeEvent, type ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import type { ICreateQuizFormData } from "@/features/teacher";
import { FilterBlock, Icons, MenuButton, Modal } from "@/shared/ui";
import styles from "./show-more-modal.module.css";

export function ShowMoreModal({
	isOpen,
	onClose,
	title,
	name,
	content,
}: {
	isOpen?: boolean;
	onClose?: () => void;
	title?: string;
	children?: ReactNode;
	name: "languagesIds" | "subjectId" | "tagsIds";
	content: (
		onChange: (e: ChangeEvent<HTMLInputElement>) => void,
        selectedItems: string | string[]
	) => ReactNode;
}) {
	const { watch, setValue } = useFormContext<ICreateQuizFormData>();
	const items = watch(name);
	const [selectedItems, setSelectedItems] = useState(items);

	if (!isOpen || !onClose) return;
	function toggleChecked(value: string, isChecked: boolean) {
		if (!isChecked) {
			setSelectedItems((prev) => {
				if (Array.isArray(prev)) {
					return prev?.filter((v) => value != v);
				} else {
					return "";
				}
			});
		} else {
			setSelectedItems((prev) => {
				if (Array.isArray(prev)) {
					return [...prev, value];
				} else {
					return value;
				}
			});
		}
	}
	function onChange(e: ChangeEvent<HTMLInputElement>) {
		toggleChecked(e.target.value, e.target.checked);
	}
	return (
		<Modal
			className={styles.modal}
			isOpen={isOpen}
			onClose={onClose}
			doCloseOnClickOutside={false}
		>
			<div className={styles.closeIcon}>
				<Icons.Cross
					onClick={() => {
						onClose();
					}}
				/>
			</div>
			<div className={styles.main}>
				<h1 className={styles.header}>Add more {title}</h1>
				<FilterBlock>{content(onChange, selectedItems)}</FilterBlock>
				<MenuButton
					title={"Add"}
					onClick={() => {
						setValue(name, selectedItems);
						onClose();
					}}
					enabled
					className={styles.button}
				/>
			</div>
		</Modal>
	);
}
