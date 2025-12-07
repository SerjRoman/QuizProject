export type UserProfile = "TEACHER" | "STUDENT";

export interface User {
	id: string;
	email: string;
	roles: UserProfile[];
	username: string;
	createdAt: Date;
	firstName: string;
	lastName: string;
	avatar: string;
}
