import type { IQuiz, QuizVisibility } from "@/entities/quiz";

// Два типа: Пейлоад и Респонс
export interface CreateQuizPayload {
    title: string;
    visibility: QuizVisibility;
    shuffleQuestions: boolean;
    shuffleAnswers: boolean;
    coverImage?: string;
    subjectId: string;
    tagsIds: string[];
    languagesIds: string[];
}

export type CreateQuizResponse = IQuiz