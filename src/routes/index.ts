import App from "@/App";
import About from "@/pages/about";
import Home from "@/pages/home";
import Login from "@/pages/login";
import Register from "@/pages/register";
import VerifyEmail from "@/pages/verifyEmail";
import { createBrowserRouter } from "react-router";

const routes = createBrowserRouter([
	{
		Component: App,
		path: "/",
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: "/about",
				Component: About,
			},
		],
	},
	{
		path: "/login",
		Component: Login,
	},
	{
		path: "/register",
		Component: Register,
	},
	{
		path: "/verify-email",
		Component: VerifyEmail,
	},
]);

export default routes;
