import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "@/shared/api";
import { AppReducers } from "./reducers";

export const AppStore = configureStore({
	reducer: AppReducers,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			baseApi.middleware
		),
	devTools: import.meta.env.VITE_MODE !== "production",
});
