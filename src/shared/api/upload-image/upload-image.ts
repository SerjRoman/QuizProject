import axios from "axios";
import { baseApi } from "../api";
import type {
	GetUploadParamsPayload,
	GetUploadParamsResponse,
	UploadImagePayload,
	UploadImageResponse,
} from "./api.types";
const uploadFileApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getUploadParams: build.mutation<
			GetUploadParamsResponse,
			GetUploadParamsPayload
		>({
			query: ({ fileType, url }) => ({
				url: url,
				method: "POST",
				body: { fileType },
			}),
		}),
		uploadImage: build.mutation<UploadImageResponse, UploadImagePayload>({
			async queryFn({ file, url }, { dispatch }) {
				try {
					const params: GetUploadParamsResponse = await dispatch(
						uploadFileApi.endpoints.getUploadParams.initiate({
							fileType: file.type,
							url,
						})
					).unwrap();
					const formData = new FormData();
					formData.append("file", file);
					formData.append("api_key", params.apiKey);
					formData.append("timestamp", params.timestamp);
					formData.append("signature", params.signature);
					formData.append("folder", params.folder);
					formData.append("public_id", params.public_id);
					formData.append("transformation", params.transformation);

					const response = await axios.post<{ secure_url: string }>(
						params.uploadUrl,
						formData
					);

					return { data: response.data.secure_url };
				} catch (error) {
					console.error(error);
					return {
						error: {
							data: "Could not upload image. Try again",
							status: 500,
						},
					};
				}
			},
		}),
	}),
});
export const { useGetUploadParamsMutation, useUploadImageMutation } =
	uploadFileApi;
