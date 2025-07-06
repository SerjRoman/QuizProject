import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

const root = path.resolve(__dirname, "src");

export default defineConfig({
	resolve: {
		alias: {
			"@": root,
			"@shared": `${root}/shared`,
			"@app": `${root}/app`,
			"@features": `${root}/features`,
			"@entities": `${root}/entities`,
			"@widgets": `${root}/widgets`,
			"@pages": `${root}/pages`,
		},
	},
	plugins: [react()],
});
