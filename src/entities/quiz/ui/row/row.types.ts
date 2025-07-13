import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import type { IQuiz } from "../../model/types";

type QuizRow = {
	title: string;
	createdAt: string;
};

export interface IQuizTableRowProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLTableElement>,
		HTMLTableElement
	> {
	quiz: Pick<IQuiz, keyof QuizRow> & { isFavourite: boolean };
	actions: ReactNode;
}
