import { clsx } from "clsx";
import { IconButton, Icons } from "@/shared/ui";
import {
	useAddToFavouriteMutation,
	useRemoveFromFavouriteMutation,
} from "../../api";
import styles from "./add-quiz-to-favourites-button.module.css";
import type { AddQuizToFavouritesButtonProps } from "./add-quiz-to-favourites-button.types";

export function AddQuizToFavouritesButton({
	isFavourite,
	quizId,
}: AddQuizToFavouritesButtonProps) {
	const [addToFavourite, { isLoading: addLoading }] =
		useAddToFavouriteMutation();
	const [removeFromFavourite, { isLoading: removeLoading }] =
		useRemoveFromFavouriteMutation();
	const isLoading = addLoading || removeLoading;
	return (
		<IconButton
			onClick={() => {
				if (!isFavourite) addToFavourite({ id: quizId });
				else removeFromFavourite({ id: quizId });
			}}
			disabled={isLoading}
		>
			<Icons.Star
				className={clsx(
					styles.starIcon,
					isFavourite ? styles.fill : styles.default
				)}
			/>
		</IconButton>
	);
}
