export type QuizLibraryRequest = {
	userId: string;
	from?: "copied" | "favourite" | "created";
};
export type QuizLibraryAllResponse = {
	id: string;
	title: string;
	favouritedByIds: string[];
	createdAt: string;
};
