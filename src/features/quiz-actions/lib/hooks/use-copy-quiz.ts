import { useError } from "@/shared/lib";
import { QUIZ_ACTIONS_API_ERROR_MAP, useCopyQuizMutation } from "../../api";

export function useCopyQuiz() {
	const [copyQuiz, mutationParams] = useCopyQuizMutation();
	const { ModalError, handleError } = useError();

	const handleCopy = (quizId: string) => {
		try {
			copyQuiz({ quizId }).unwrap();
		} catch (err) {
			console.error("Error creating quiz:", err);
			if (err instanceof Error) {
				handleError(err, QUIZ_ACTIONS_API_ERROR_MAP.copy);
			}
		}
	};

	return { copyQuiz: handleCopy, ModalError, ...mutationParams };
}
