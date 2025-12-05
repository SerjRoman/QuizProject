import { createSlice } from "@reduxjs/toolkit";
import type { LoginResponse } from "../../api/types/auth";
import type { User } from "../types/user";

interface IUserState {
	user: User | null;
	accessToken: string | null;
	refreshToken: string | null;
	isAuthenticated: boolean;
}
const initialState: IUserState = {
	user: null,
	accessToken: null,
	refreshToken: null,
	isAuthenticated: true,
};

export const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {
		setTokens: (state, { payload }: { payload: LoginResponse }) => {
			state.accessToken = payload.accessToken;
			state.refreshToken = payload.refreshToken;
			localStorage.setItem("accessToken", payload.accessToken);
			localStorage.setItem("refreshToken", payload.refreshToken);
		},
		setUser: (state, { payload }: { payload: User }) => {
			state.isAuthenticated = true;
			state.user = payload;
		},
		logout: (state) => {
			state.user = null;
			state.accessToken = null;
			state.refreshToken = null;
			state.isAuthenticated = false;
			localStorage.removeItem("accessToken");
			localStorage.removeItem("refreshToken");
		},
	},
});

export const { setTokens, setUser, logout } = userSlice.actions;
