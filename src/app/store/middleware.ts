import { createListenerMiddleware } from "@reduxjs/toolkit";
import { setTokens, userApi } from "@/entities/user";
import type { AppDispatch, RootState } from "./types";

export const loginListenerMiddleware = createListenerMiddleware();

loginListenerMiddleware.startListening.withTypes<RootState, AppDispatch>()({
	actionCreator: setTokens,
	effect: (_, listenerApi) => {
		listenerApi.dispatch(userApi.endpoints.me.initiate());
		listenerApi.cancelActiveListeners();
	},
});
