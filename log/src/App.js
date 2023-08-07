import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootComponenet from "./Components/RootComponenet";
const router = createBrowserRouter([
    { path: "/", element: <RootComponenet /> },
]);
function App() {
    return <RouterProvider router={router}></RouterProvider>;
}
export default App;
