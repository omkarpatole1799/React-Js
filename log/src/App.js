// function imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// component imports
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import AddUser from "./Components/SignUp/AddUser";
import AddLog from "./Components/AddLog/AddLog";

const router = createBrowserRouter([
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/add-user", element: <AddUser /> },
    { path: "/add-log", element: <AddLog /> },
    { path: "/login", element: <Login /> },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}
export default App;
