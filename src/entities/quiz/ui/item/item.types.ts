import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import type { Quiz } from "../../model";

export interface QuizItemProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLTableElement>,
        HTMLTableElement
    > {
    quiz: Quiz;
    isMy: boolean;
    actions: ReactNode;
}
