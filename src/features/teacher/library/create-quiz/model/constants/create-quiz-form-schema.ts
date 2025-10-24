import * as yup from "yup";

export const createQuizFormSchema = yup.object({
	title: yup.string().min(3).required("Title is required"),
	subjectId: yup.string().length(24).required("Subject ID is required"),
	coverImage: yup.mixed<File>().nullable().default(null),
	tagsIds: yup.array().of(yup.string().required()).required(),
	languagesIds: yup.array().of(yup.string().required()).required(),
	visibility: yup.string().oneOf(["PUBLIC", "PRIVATE"]).default("PRIVATE"),
	shuffleAnswers: yup.string().oneOf(["true", "false"]).default("false"),
	shuffleQuestions: yup.string().oneOf(["true", "false"]).default("false"),
});
