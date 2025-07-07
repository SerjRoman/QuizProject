import { createApi } from "@reduxjs/toolkit/query/react";

import { customBaseQuery } from "./query";

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: customBaseQuery,
	endpoints: () => ({}),
});


