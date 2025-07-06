import { baseApi } from "@/shared/api";
import { USER_API_MAP } from "@/shared/model/constants";
import { login, setUser, type IUser } from "../model";
import type { ILoginRequest, ILoginResponse } from "./types/auth";

export const authApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		login: build.mutation<ILoginResponse, ILoginRequest>({
			invalidatesTags: ["User"],
			query: (credentials) => ({
				url: USER_API_MAP.login,
				body: credentials,
				method: "POST",
			}),
			onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
				try {
					const data = (await queryFulfilled).data;
					dispatch(login(data));
				} catch (e) {
					console.error(e);
				}
			},
		}),
		me: build.query<IUser, void>({
			providesTags: ["User"],
			query: () => ({
				url: USER_API_MAP.me,
			}),
			onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
				try {
					const data = (await queryFulfilled).data;
					dispatch(setUser(data));
				} catch (e) {
					console.error(e);
				}
			},
		}),
	}),
});

export const { useLoginMutation, useMeQuery, useLazyMeQuery } = authApi;
