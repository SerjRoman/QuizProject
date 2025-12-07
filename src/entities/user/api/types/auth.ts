import type { UserProfile } from "../../model";

export interface LoginRequest {
	email: string;
	password: string;
}

export interface LoginResponse {
	accessToken: string;
	refreshToken: string;
}

export interface RegisterRequest {
	email: string;
	password: string;
	role: UserProfile;
	username: string;
}
export interface RegisterResponse {
	accessToken: string;
	refreshToken: string;
}
