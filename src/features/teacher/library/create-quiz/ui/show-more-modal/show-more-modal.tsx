import { useState } from "react";
import { useFormContext } from "react-hook-form";
import type { ICreateQuizFormData } from "@/features/teacher";
import {
	CheckboxGroup,
	FilterBlock,
	Icons,
	MenuButton,
	Modal,
} from "@/shared/ui";
import styles from "./show-more-modal.module.css";

export function ShowMoreModal({
	isOpen,
	onClose,
	title,
	children,
	name,
}: {
	isOpen?: boolean;
	onClose?: () => void;
	title?: string;
	children?: React.ReactNode;
	name: "languages" | "subject" | "tags";
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
				<FilterBlock>
					<CheckboxGroup
						name={name}
						onChange={(e) => {
							toggleChecked(e.target.value, e.target.checked);
						}}
					>
						{children}
					</CheckboxGroup>
				</FilterBlock>
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
