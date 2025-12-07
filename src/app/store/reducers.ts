import { combineReducers } from "redux";
import { quizFiltersSlice } from "@/entities/quiz";
import { joinRoomSlice } from "@/entities/room";
import { userSlice } from "@/entities/user";
import { baseApi } from "@/shared/api";

export const AppReducers = combineReducers({
	[baseApi.reducerPath]: baseApi.reducer,
	[userSlice.name]: userSlice.reducer,
	[joinRoomSlice.name]: joinRoomSlice.reducer,
	[quizFiltersSlice.name]: quizFiltersSlice.reducer,
});
