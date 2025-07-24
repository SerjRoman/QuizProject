import * as yup from "yup";

export const createQuizFormSchema = yup.object({
	title: yup.string().min(3).required("Title is required"),
	subjectId: yup.string().length(24).required("Subject ID is required"),
	coverImage: yup.string(),
	tagsIds: yup.array().of(yup.string().required()),
	languagesIds: yup.array().of(yup.string().required()),
	visibility: yup.string().required(),
	shuffleAnswers: yup.boolean().default(false),
	shuffleQuestions: yup.boolean().default(false),
	
});
