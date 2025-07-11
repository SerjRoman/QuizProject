import type { ParticipantType } from "../../model";

export interface IVerifyCodeRequest {
	code: string;
	participantType: ParticipantType;
}
export interface IVerifyCodeResponse {
	code: string;
}
