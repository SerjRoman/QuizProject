export type QuizLibraryRequest = {
	from?: "copied" | "favourite" | "created";
};
export type QuizLibraryAllResponse = {
	id: string;
	title: string;
	isFavourite: boolean;
	createdAt: Date;
	tagsIds: string[];
	languagesIds: string[];
	subjectId: string;
};
export type QuizLibraryAllResponseRaw = {
	id: string;
	title: string;
	isFavourite: boolean;
	createdAt: string;
	tagsIds: string[];
	languagesIds: string[];
	subjectId: string;
};

export type QuizLibraryFavourite = {
	id: string;
};
