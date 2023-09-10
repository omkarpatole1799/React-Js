import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";

function NavbarRoot() {
	return (
		<>
			<Navbar></Navbar>
			<Outlet></Outlet>
		</>
	);
}

export default NavbarRoot;
