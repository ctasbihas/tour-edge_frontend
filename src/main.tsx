import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import "./index.css";
import { ThemeProvider } from "./providers/theme.provider.tsx";
import { store } from "./redux/store.ts";
import routes from "./routes/index.ts";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<ThemeProvider
				defaultTheme="system"
				storageKey="vite-ui-theme"
			>
				<RouterProvider router={routes} />
			</ThemeProvider>
		</Provider>
	</StrictMode>
);
