import { combineReducers } from "redux";
import { userSlice } from "@/entities/user";
import { baseApi } from "@/shared/api";
export const AppReducers = combineReducers({
	[baseApi.reducerPath]: baseApi.reducer,
	[userSlice.name]: userSlice.reducer,
});
