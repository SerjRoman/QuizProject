import { useState } from "react";
import { Icons, Images, Input, Modal } from "@/shared/ui";
import { useGetAccessesQuery } from "../../api";
import styles from "./edit-accessibility-modal.module.css";
import type { EditAccessibilityModalProps } from "./edit-accessibility-modal.types";

export function EditAccessibilityModal(props: EditAccessibilityModalProps) {
	const { isOpen, onClose, quizId } = props;

	const { data: quizzes } = useGetAccessesQuery(
		{ quizId },
		{ skip: !quizId }
	);
	const [search, setSearch] = useState<string>("");
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			doCloseOnClickOutside
			className={styles.modal}
		>
			<span className={styles.title}>Accessibility</span>
			<Input
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Start typing username..."
				iconRight={<Icons.Search />}
			/>
			<div>
				<span>People with access</span>
				<div className={styles.accesses}>
					{quizzes?.accesses.map((access) => {
						const { user } = access.profile;
						return (
							<div className={styles.access}>
								<div className={styles.userBlock}>
									<img
										src={
											user.avatar ?? Images.defaultAvatar
										}
									/>
									<span>
										{user.firstName} {user.lastName}
									</span>
								</div>
								<div className={styles.userAccess}>
									{access.accessType}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</Modal>
	);
}
