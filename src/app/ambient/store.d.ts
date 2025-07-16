declare module "@shared/lib" {
	import "shared/lib";
	import { AppStore } from "@app/store/";

	export type StateSchema = ReturnType<typeof AppStore.getState>;
	export type AppDispatchSchema = ReturnType<AppStore.dispatch>;
}
