import type { BaseQueryApi } from "@reduxjs/toolkit/query";
import type { AppStore } from "./store";

export type RootState = ReturnType<typeof AppStore.getState>;
export type AppDispatch = typeof AppStore.dispatch;

export interface CustomBaseQueryApi extends BaseQueryApi {
	signal: AbortSignal;
	dispatch: AppDispatch;
	getState: () => RootState;
}
