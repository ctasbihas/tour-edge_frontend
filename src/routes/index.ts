import App from "@/App";
import { createBrowserRouter } from "react-router";

const routes = createBrowserRouter([
	{
		Component: App,
		path: "/",
	},
]);

export default routes;
