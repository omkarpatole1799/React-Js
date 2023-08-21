// function imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// component imports
import RootComponenet from "./Components/RootComponenet";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import AddUser from "./Components/Dashboard/AddUser";
import AddLog from "./Components/Dashboard/AddLog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootComponenet />,
        children: [
            { path: "dashboard", element: <Dashboard /> },
            {
                path: "add-user",
                element: <AddUser />,
            },
            {
                path: "add-log",
                element: <AddLog />,
            },
            {
                path: "login",
                element: <Login />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}
export default App;
