import { baseApi } from "@/shared/api";
import { setCodeEntryStepData, setStep } from "../model";
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
					const { data } = await queryFulfilled;
					dispatch(setStep("profile-setup"));
					dispatch(
						setCodeEntryStepData({
							entryCode: data.code,
							participantType: arg.participantType,
						})
					);
					localStorage.setItem("entryCode", data.code);
				} catch (error) {
					console.error(error);
				}
			},
		}),
	}),
});

export const { useVerifyCodeMutation } = joinProcessApi;
