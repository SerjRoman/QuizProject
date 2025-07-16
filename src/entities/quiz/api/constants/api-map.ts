export const QUIZ_LIBRARY_API_MAP = {
	my: "/quizzes/teacher/my",
	myCopied: "/quizzes/teacher/my/copied",
	myFavourite: "/quizzes/teacher/my/favourite",
	myCreated: "/quizzes/teacher/my/created",
    favourite: (id: string) => `/quizzes/${id}/favourite`
};
