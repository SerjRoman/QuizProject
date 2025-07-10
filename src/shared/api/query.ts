import {
	fetchBaseQuery,
	type BaseQueryFn,
	type FetchArgs,
	type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { ENV } from "@/shared/config";
import { USER_API_MAP } from "../model/constants";
import { queryHeaders } from "./headers";
export const baseQuery = fetchBaseQuery({
	baseUrl: ENV.VITE_API_URL,
	prepareHeaders: queryHeaders,
});

export const customBaseQuery: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async function (args, api, extraOptions) {
	const result = await baseQuery(args, api, extraOptions);

	if (result.error && result.error.status === 401) {
		const refreshToken = localStorage.getItem("refreshToken");
		if (!refreshToken) {
			api.dispatch({ type: "user/logout" });
			return result;
		}
		const resRefresh = await baseQuery(
			{
				url: USER_API_MAP.refresh,
				method: "POST",
				body: {
					refreshToken,
				},
			},
			api,
			extraOptions
		);
		if (resRefresh.error) {
			await baseQuery(
				{
					url: USER_API_MAP.logout,
				},
				api,
				extraOptions
			);
			api.dispatch({ type: "user/logout" });
		} else {
			const data: { token: string } = resRefresh.data as {
				token: string;
			};
			api.dispatch({
				type: "user/setTokens",
				payload: {
					refreshToken: refreshToken,
					token: data.token,
				},
			});
			const result = await baseQuery(args, api, extraOptions);
			return result;
		}
	}
	return result;
};
