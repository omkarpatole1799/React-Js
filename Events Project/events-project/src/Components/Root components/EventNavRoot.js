import { Outlet } from "react-router-dom";
import EventNav from "../Header/EventNav";
function EventNavRoot() {
	return (
		<>
			<EventNav />
			<Outlet />
		</>
	);
}

export default EventNavRoot;
