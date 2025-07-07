import { createSlice } from "@reduxjs/toolkit";
import type { ILoginResponse } from "../../api/types/auth";
import type { IUser } from "../types/user";


interface IUserState {
	user: IUser | null;
	token: string | null;
	refreshToken: string | null;
	isAuthenticated: boolean;
}
const initialState: IUserState = {
	user: null,
	token: null,
	refreshToken: null,
	isAuthenticated: false,
};

export const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {
		setTokens: (state, { payload }: { payload: ILoginResponse }) => {
			state.token = payload.token;
			state.refreshToken = payload.refreshToken;
			localStorage.setItem("token", payload.token);
			localStorage.setItem("refreshToken", payload.refreshToken);
		},
		setUser: (state, { payload }: { payload: IUser }) => {
			state.isAuthenticated = true;
			state.user = payload;
		},
		logout: (state) => {
			state.user = null;
			state.token = null;
			state.refreshToken = null;
			state.isAuthenticated = false;
			localStorage.removeItem("token");
			localStorage.removeItem("refreshToken");
		},
	},
});

export const { setTokens, setUser, logout } = userSlice.actions;
