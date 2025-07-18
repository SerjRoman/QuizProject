export interface IPaginateProps {
	currentPage: number;
	totalPages: number;
	setPage: (value: number) => void;
	className?: string;
}
