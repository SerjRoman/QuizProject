import { IconButton, Icons } from "@/shared/ui";
import styles from "./access-button.module.css"
;
export function AccessButton({ onClick }: { onClick: () => void }) {
	return (
		<IconButton onClick={onClick}>
			<Icons.Users className={styles.peopleIcon} />
		</IconButton>
	);
}
