// function imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// component imports
import AddUser from './Components/SignUp/AddUser';
import AddLog from './Components/AddLog/AddLog';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import LogList from './Components/LogList/LogList';
import RootComponent from './Components/Root/RootComponent';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootComponent />,
        children: [
            { path: 'login', element: <Login /> },
            { path: 'add-log', element: <AddLog /> },
            { path: 'dashboard', element: <Dashboard /> },
            { path: 'add-user', element: <AddUser /> },
            { path: 'log-list', element: <LogList /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}
export default App;
