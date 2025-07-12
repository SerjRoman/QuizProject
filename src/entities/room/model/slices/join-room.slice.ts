import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ParticipantType } from "../types";

interface IJoinRoomState {
	step: "code-entry" | "profile-setup";
	name: string;
	avatar: string;
	participantType: ParticipantType;
	isJoined: boolean;
}

const initialState: IJoinRoomState = {
	step: "code-entry",
	name: "",
	avatar: "",
	participantType: "GUEST",
	isJoined: false,
};

export const joinRoomSlice = createSlice({
	name: "join-room",
	initialState,
	reducers: {
		setParticipantType: (
			state,
			{
				payload,
			}: PayloadAction<{
				participantType: ParticipantType;
			}>
		) => {
			state.participantType = payload.participantType;
		},
		setParticipantData: (
			state,
			{ payload }: PayloadAction<{ name: string; avatar: string }>
		) => {
			state.avatar = payload.avatar;
			state.name = payload.name;
		},
		setStep: (
			state,
			{ payload }: PayloadAction<"code-entry" | "profile-setup">
		) => {
			state.step = payload;
		},
	},
});

export const { setParticipantType, setParticipantData, setStep } =
	joinRoomSlice.actions;
