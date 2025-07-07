import type { UserProfile } from "../../model";

export interface ILoginRequest {
	email: string;
	password: string;
}

export interface ILoginResponse {
	token: string;
	refreshToken: string;
}

export interface IRegisterRequest {
	email: string;
	password: string;
	role: UserProfile;
    username: string
}
export interface IRegisterResponse {
	token: string;
	refreshToken: string;
}
