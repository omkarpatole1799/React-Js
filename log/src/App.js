// function imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
      { path: 'addLog', element: <AddLog /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'addUser', element: <AddUser /> },
      { path: 'logList', element: <LogList /> },
    ],
  },
  { path: '/login', element: <Login /> },
]);

function App() {
  const user = useSelector((state) => state.user);
  console.log(user);
  console.log(useSelector((state) => state.isAuthenticated));
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
export default App;
