export interface IQuiz {
	id: string;
	createdAt: Date;
	title: string;
	TeacherCreatedId: string | null;
	StudentAttemptedId: string | null;
}
