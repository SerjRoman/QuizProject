import type { PropsWithChildren } from "react";
import type { PaginationData } from "@/shared/lib";

export interface IQuizContentProps extends PropsWithChildren {
	meta: PaginationData;
	onPageChange: (page: number) => void;
}
