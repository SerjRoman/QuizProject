import * as yup from "yup";

export const createQuizFormSchema = yup.object({
	title: yup.string().min(3).required("Title is required"),
	subjectId: yup.string().length(24).required("Subject ID is required"),
	coverImage: yup.string().optional(),
	tagsIds: yup.array().of(yup.string().required()).optional(),
	languagesIds: yup.array().of(yup.string().required()).optional(),
	shuffleAnswers: yup.boolean().default(false),
	shuffleQuestions: yup.boolean().default(false),
});
