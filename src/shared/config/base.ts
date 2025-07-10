import { cleanEnv, str } from "envalid";

export const ENV = cleanEnv(import.meta.env, {
	VITE_API_URL: str(),
	VITE_MODE: str(),
});
