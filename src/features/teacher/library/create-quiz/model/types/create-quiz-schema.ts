import type { InferType } from "yup";
import type { createQuizFormSchema } from "../constants";

export type ICreateQuizSchema = InferType<typeof createQuizFormSchema>