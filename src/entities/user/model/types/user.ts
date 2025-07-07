export type UserProfile = "Teacher" | "Student";

export interface IUser {
    id: string
	email: string;
	role: UserProfile;
	username: string;
	createdAt: Date;
}
