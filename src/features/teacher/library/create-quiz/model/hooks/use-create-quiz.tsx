import { useCreateQuizMutation } from "@/entities/quiz";
import { useUploadImageMutation } from "@/shared/api";
import { useError } from "@/shared/lib";
import { CREATE_QUIZ_API_MAP, CREATE_QUIZ_ERROR_MAP } from "../constants";
import type { CreateQuizSchema } from "../types";

export function useCreateQuiz(onSuccess: () => void) {
	const [createQuiz, { isLoading: isCreateLoading }] =
		useCreateQuizMutation();
	const [uploadImage, { isLoading: isUploadImageLoading }] =
		useUploadImageMutation();
	const isLoading = isUploadImageLoading || isCreateLoading;
	const { ModalError, handleError } = useError();

	async function submitCreateQuiz(data: CreateQuizSchema) {
		let finalCoverImageUrl: string | undefined = undefined;

		try {
			if (data.coverImage instanceof File) {
				finalCoverImageUrl = await uploadImage({
					file: data.coverImage,
					url: CREATE_QUIZ_API_MAP.uploadCover,
				}).unwrap();
			} else if (typeof data.coverImage === "string") {
				finalCoverImageUrl = data.coverImage;
			}
			await createQuiz({
				...data,
				shuffleAnswers: data.shuffleAnswers === "true",
				shuffleQuestions: data.shuffleQuestions === "true",
				coverImage: finalCoverImageUrl,
			}).unwrap();
			onSuccess();
		} catch (err) {
			console.error("Error creating quiz:", err);
			if (err instanceof Error) {
				handleError(err, CREATE_QUIZ_ERROR_MAP);
			}
		}
	}
	return { submitCreateQuiz, isLoading, ModalError };
}
