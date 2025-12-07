import { clsx } from "clsx";
import { IconButton, Icons } from "@/shared/ui";
import { useToggleFavouriteMutation } from "../../api";
import styles from "./toggle-favourite-quiz.module.css";
import type { AddQuizToFavouritesButtonProps } from "./toggle-favourite-quiz.types";

export function ToggleFavouriteQuizButton({
	isFavourite,
	quizId,
}: AddQuizToFavouritesButtonProps) {
	const [toggleFavourite, { isLoading }] = useToggleFavouriteMutation();

	const handleToggleButton = () => {
		if (isLoading) return;
		toggleFavourite({ quizId });
	};
	return (
		<IconButton onClick={handleToggleButton} disabled={isLoading}>
			<Icons.Star
				className={clsx(
					styles.starIcon,
					isFavourite ? styles.fill : styles.default
				)}
			/>
		</IconButton>
	);
}
