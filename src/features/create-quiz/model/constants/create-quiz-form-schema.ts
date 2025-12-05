import * as yup from "yup";

export const createQuizFormSchema = yup.object({
	title: yup.string().min(3).required("Title is required"),
	subjectId: yup.string().length(36).required("Subject ID is required"),
	coverImage: yup.mixed<File>().nullable().default(null),
	tagIds: yup.array().of(yup.string().required()).required(),
	languageIds: yup.array().of(yup.string().required()).required(),
	visibility: yup.string().oneOf(["PUBLIC", "PRIVATE"]).default("PRIVATE"),
	shuffleAnswers: yup.string().oneOf(["true", "false"]).default("false"),
	shuffleQuestions: yup.string().oneOf(["true", "false"]).default("false"),
});
