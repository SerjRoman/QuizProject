/// <reference types="vite/client" />
/// <reference types="./assets.d.ts" />
interface ImportMetaEnv {
	readonly VITE_API_URL: string;
	readonly VITE_MODE: string;
}

interface ImportMeta {
	readonly env: ImportMeta;
}
