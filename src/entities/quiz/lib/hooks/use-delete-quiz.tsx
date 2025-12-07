import { useError } from "@/shared/lib";
import { QUIZ_API_ERROR_MAP, useDeleteQuizMutation } from "../../api";

export function useDeleteQuiz() {
	const { ModalError, handleError } = useError();
	const [deleteQuiz, mutationParams] = useDeleteQuizMutation();

	const handleDelete = (id: string) => {
		try {
			deleteQuiz({ id: id }).unwrap();
		} catch (err) {
			console.error("Error creating quiz:", err);
			if (err instanceof Error) {
				handleError(err, QUIZ_API_ERROR_MAP.delete);
			}
		}
	};

	return { deleteQuiz: handleDelete, ModalError, ...mutationParams };
}
