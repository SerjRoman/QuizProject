export type UserRole = "TEACHER" | "STUDENT";

export interface User {
    id: string;
    email: string;
    roles: UserRole[];
    username: string;
    createdAt: Date;
    firstName: string;
    lastName: string;
    avatar: string;
}

export interface TeacherProfile {
    id: string;
    user: User;
}
