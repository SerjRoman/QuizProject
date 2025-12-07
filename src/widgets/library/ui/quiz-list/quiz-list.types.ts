import type { PropsWithChildren, ReactNode } from "react";
import type { Quiz } from "@/entities/quiz";
import type { PaginationData } from "@/shared/lib";

export interface QuizContentProps extends PropsWithChildren {
    data?: { data: Quiz[]; meta: PaginationData };
    isLoading?: boolean;
    error?: unknown;
    userId?: string;
    currentPage: number;
    onEditAccess: (quizId: string) => void;
    onPageChange: (page: number) => void;
    renderActions: (quiz: Quiz) => ReactNode;
}
