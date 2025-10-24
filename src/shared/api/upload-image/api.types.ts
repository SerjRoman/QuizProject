export interface GetUploadParamsResponse {
	signature: string;
	timestamp: string;
	apiKey: string;
	uploadUrl: string;
	folder: string;
	public_id: string;
	transformation: string;
}
export interface GetUploadParamsPayload {
	fileType: string;
	url: string;
}

export type UploadImageResponse = string;
export interface UploadImagePayload {
	file: File;
	url: string;
}
