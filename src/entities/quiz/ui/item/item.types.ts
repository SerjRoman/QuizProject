import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import type { QuizLibrary } from "../../model";

export interface IQuizItemProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLTableElement>,
		HTMLTableElement
	> {
	quiz: QuizLibrary;
	isMy: boolean;
	actions: ReactNode;
}
