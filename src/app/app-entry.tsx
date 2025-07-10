import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { AppStore } from "./store";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={AppStore}>
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>
);
