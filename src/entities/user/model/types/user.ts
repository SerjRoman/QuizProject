export type UserProfile = "TEACHER" | "STUDENT";

export interface IUser {
	id: string;
	email: string;
	role: UserProfile;
	username: string;
	createdAt: Date;
	firstName: string;
	lastName: string;
}
