export type SubErrorMap = Record<string, string> & {
	__DEFAULT__?: string;
};
export type ErrorMap = Record<number, string | SubErrorMap>;

export interface ApiErrorWithSubCode extends Error {
	errorCode?: string | string[];
	status: number;
}
