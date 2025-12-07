import { useDeleteQuiz } from "@/entities/quiz";
import { Dropdown, IconButton, Icons } from "@/shared/ui";
import { useCopyQuiz } from "../../lib/hooks";
import styles from "./quiz-settings-dropdown.module.css";
import type { QuizSettingsDropdownProps } from "./quiz-settings-dropdown.types";

export function QuizSettingsDropdown({ quiz }: QuizSettingsDropdownProps) {
	const {
		deleteQuiz,
		isLoading: deleteLoading,
		ModalError: ModalErrorDelete,
	} = useDeleteQuiz();
	const {
		copyQuiz,
		isLoading: copyLoading,
		ModalError: ModalErrorCopy,
	} = useCopyQuiz();

	const ACTIONS = [
		{
			title: "Edit",
			//! FIX NOOP
			onClick: () => {},
			loading: false,
		},
		{
			title: "Delete",
			onClick: () => deleteQuiz(quiz.id),
			loading: deleteLoading,
		},
		{
			title: "Make a copy",
			onClick: () => copyQuiz(quiz.id),
			loading: copyLoading,
		},
	];

	return (
		<div className={styles.block}>
			<Dropdown
				dataSource={ACTIONS}
				className={styles.dropdown}
				renderItem={(item, close) => (
					<button
						className={styles.dropdownButton}
						onClick={() => {
							item.onClick();
							close();
						}}
						disabled={item.loading}
					>
						{item.title}
					</button>
				)}
				closeOn="leave"
				trigger={({ open, isOpen, close }) => (
					<IconButton onClick={isOpen ? close : open}>
						<Icons.DotsVertical />
					</IconButton>
				)}
			/>
			{ModalErrorDelete}
			{ModalErrorCopy}
		</div>
	);
}
