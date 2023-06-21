import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Events from "./Components/Pages/Events";
import NavbarRoot from "./Components/Root components/NavbarRoot";
import EventDetails from "./Components/Pages/EventDetails";
import EditEvent from "./Components/Pages/EditEvent";
import EventNavRoot from "./Components/Root components/EventNavRoot";

const router = createBrowserRouter([
	{
		path: "/",
		element: <NavbarRoot />,
		children: [
			{ index: true, element: <Home /> },

			{
				path: "events/",
				element: <EventNavRoot />,
				children: [
					{ index: true, element: <Events /> },
					{ path: ":eventId", element: <EventDetails /> },
					{ path: ":eventId/edit", element: <EditEvent /> },
				],
			},
		],
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	);
}

export default App;
