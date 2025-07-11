import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "@/shared/api";
import { ENV } from "@/shared/config";
import { loginListenerMiddleware } from "./middleware";
import { AppReducers } from "./reducers";

export const AppStore = configureStore({
	reducer: AppReducers,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false })
			.concat(baseApi.middleware)
			.concat(loginListenerMiddleware.middleware),
	devTools: ENV.VITE_MODE !== "production",
});
