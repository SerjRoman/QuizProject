import type { InferType } from "yup";
import type { createQuizFormSchema } from "../constants";

export type CreateQuizSchema = InferType<typeof createQuizFormSchema>