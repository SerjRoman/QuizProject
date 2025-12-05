import { baseApi } from "@/shared/api";
import { setTokens, setUser, type User } from "../model";
import { AUTH_API_MAP } from "./constants";
import type {
	LoginRequest,
	LoginResponse,
	RegisterRequest,
	RegisterResponse,
} from "./types/auth";

export const userApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		login: build.mutation<LoginResponse, LoginRequest>({
			query: (credentials) => ({
				url: AUTH_API_MAP.login,
				body: credentials,
				method: "POST",
			}),
			onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
				try {
					const data = (await queryFulfilled).data;
					dispatch(setTokens(data));
				} catch (e) {
					console.error(e);
				}
			},
		}),
		register: build.mutation<RegisterResponse, RegisterRequest>({
			query: (credentials) => ({
				method: "POST",
				body: credentials,
				url: AUTH_API_MAP.register,
			}),
			onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
				try {
					const data = (await queryFulfilled).data;
					dispatch(setTokens(data));
				} catch (e) {
					console.error(e);
				}
			},
		}),

		me: build.query<User, void>({
			query: () => ({
				url: AUTH_API_MAP.me,
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

export const {
	useLoginMutation,
	useMeQuery,
	useLazyMeQuery,
	useRegisterMutation,
} = userApi;
