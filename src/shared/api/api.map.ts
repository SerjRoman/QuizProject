export const API_MAP = {
	quiz: {
		my: "/quizzes/teacher/my",
		myCopied: "/quizzes/teacher/my/copied",
		myFavourite: "/quizzes/teacher/my/favourite",
		myCreated: "/quizzes/teacher/my/created",
		copy: "/quizzes/teacher/copy",
		create: "/quizzes",
		delete: "/quizzes",
		id: (id: string) => `/quizzes/${id}`,
	},
	auth: {
		login: "/auth/login",
		register: "/auth/register",
		me: "/auth/me",
		logout: "/auth/logout",
		refresh: "/auth/refresh",
	},
	taxonomy: {
		tags: "/taxonomies/tags",
		languages: "/taxonomies/languages",
		subjects: "/taxonomies/subjects",
	},
};
