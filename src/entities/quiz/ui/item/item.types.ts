import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import type { IQuiz } from "../../model/types";

type QuizItem = {
	title: string;
	createdAt: string;
	id: string;
};

export interface IQuizItemProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLTableElement>,
		HTMLTableElement
	> {
	quiz: Pick<IQuiz, keyof QuizItem> & { isFavourite: boolean };
	actions: ReactNode;
}
