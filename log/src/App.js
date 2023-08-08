import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootComponenet from "./Components/RootComponenet";
import AddUser from "./Components/admin/AddUser";

const router = createBrowserRouter([
    { path: "/", element: <RootComponenet />, children: [{
        path: "admin/add-user",
        element: <AddUser />
    }] },
]);
function App() {
    return <RouterProvider router={router}></RouterProvider>;
}
export default App;
