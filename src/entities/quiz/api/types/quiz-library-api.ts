export type QuizLibraryRequest = {
	userId: string;
	from?: "copied" | "favourite" | "created";
};
export type QuizLibraryAllResponse = {
	id: string;
	title: string;
	favouritedByIds: string[];
	createdAt: string;
	tagsIds: string[];
	languagesIds: string[];
	subjectId: string;
};

export type QuizLibraryFavourite = {
	id: string;
};
