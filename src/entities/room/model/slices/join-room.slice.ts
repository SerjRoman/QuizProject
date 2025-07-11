import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ParticipantType } from "../types";

interface IJoinRoomState {
	step: "code-entry" | "profile-setup";
	entryCode: string;
	name: string;
	avatar: string;
	participantType: ParticipantType;
	isJoined: boolean;
}

const initialState: IJoinRoomState = {
	step: "code-entry",
	entryCode: "",
	name: "",
	avatar: "",
	participantType: "GUEST",
	isJoined: false,
};

export const joinRoomSlice = createSlice({
	name: "join-room",
	initialState,
	reducers: {
		setCodeEntryStepData: (
			state,
			{
				payload,
			}: PayloadAction<{
				entryCode: string;
				participantType: ParticipantType;
			}>
		) => {
			state.entryCode = payload.entryCode;
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

export const { setCodeEntryStepData, setParticipantData, setStep } =
	joinRoomSlice.actions;
