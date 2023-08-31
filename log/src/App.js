// function imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// component imports
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import AddUser from "./Components/SignUp/AddUser";
import AddLog from "./Components/AddLog/AddLog";
import RootComponent from "./Components/Root/RootComponent";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootComponent />,
        children: [
            { path: "login", element: <Login /> },
            { path: "add-log", element: <AddLog /> },
            { path: "dashboard", element: <Dashboard /> },
            { path: "add-user", element: <AddUser /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}
export default App;
