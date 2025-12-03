import { clsx } from "clsx";
import { IconButton, Icons } from "@/shared/ui";
import {
	useAddToFavouriteMutation,
	useRemoveFromFavouriteMutation,
} from "../../api";
import styles from "./toggle-favourite-quiz.module.css";
import type { AddQuizToFavouritesButtonProps } from "./toggle-favourite-quiz.types";

export function ToggleFavouriteQuizButton({
	isFavourite,
	quizId,
}: AddQuizToFavouritesButtonProps) {
	const [addToFavourite, { isLoading: addLoading }] =
		useAddToFavouriteMutation();
	const [removeFromFavourite, { isLoading: removeLoading }] =
		useRemoveFromFavouriteMutation();
	const isLoading = addLoading || removeLoading;

	const toggleFavourite = () => {
		if (isLoading) return;
		if (!isFavourite) addToFavourite({ id: quizId });
		else removeFromFavourite({ id: quizId });
	};
	return (
		<IconButton onClick={toggleFavourite} disabled={isLoading}>
			<Icons.Star
				className={clsx(
					styles.starIcon,
					isFavourite ? styles.fill : styles.default
				)}
			/>
		</IconButton>
	);
}
