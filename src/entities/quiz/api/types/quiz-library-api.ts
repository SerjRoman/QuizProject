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
	createdBy: {
		user: {
			avatar: string | null;
			firstName: string;
			lastName: string;
		};
	};
	coverImage: string | null;
};
export type QuizLibraryAllResponseRaw = {
	id: string;
	title: string;
	isFavourite: boolean;
	createdAt: string;
	tagsIds: string[];
	languagesIds: string[];
	subjectId: string;
	createdBy: {
		user: {
			avatar: string | null;
			firstName: string;
			lastName: string;
		};
	};
	coverImage: string | null;
};

export type QuizLibraryFavourite = {
	id: string;
};
