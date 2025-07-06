import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { queryHeaders } from "./headers";

export const baseQuery = fetchBaseQuery({
	baseUrl: import.meta.env.VITE_API_URL,
	prepareHeaders: queryHeaders,
});
