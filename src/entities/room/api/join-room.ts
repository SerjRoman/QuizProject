import { baseApi } from "@/shared/api";
import { setParticipantType, setStep } from "../model";
import type {
	IVerifyCodeRequest,
	IVerifyCodeResponse,
} from "./types/join-process.types";

export const joinProcessApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		verifyCode: build.mutation<IVerifyCodeResponse, IVerifyCodeRequest>({
			query: (body) => ({
				url: "",
				body,
			}),
			onQueryStarted: async function (arg, { dispatch, queryFulfilled }) {
				try {
					await queryFulfilled;
					dispatch(setStep("profile-setup"));
					dispatch(
						setParticipantType({
							participantType: arg.participantType,
						})
					);
				} catch (error) {
					console.error(error);
				}
			},
		}),
	}),
});

export const { useVerifyCodeMutation } = joinProcessApi;
