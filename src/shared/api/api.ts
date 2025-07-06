import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { queryHeaders } from "./headers";

export const baseApi = createApi({
	reducerPath: "baseApi",
	tagTypes: ["User"],
	baseQuery: fetchBaseQuery({
		prepareHeaders: queryHeaders,
		baseUrl: import.meta.env.VITE_API_URL,
	}),
	endpoints: () => ({}),
});
