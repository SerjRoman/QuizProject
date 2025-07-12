import type { ParticipantType } from "@/entities/room";

export interface IEnterCodeFormData {
	entryCode: string;
	participantType: ParticipantType;
}
