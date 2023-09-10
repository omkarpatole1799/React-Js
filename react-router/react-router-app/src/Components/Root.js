import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
export const Root = () => {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
};
