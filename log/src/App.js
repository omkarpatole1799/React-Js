// function imports
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom'
=======
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
>>>>>>> 8a8ba3c7edadec46a2c10f5c6768160109e67a48
// component imports
import AddUser from './Components/SignUp/AddUser'
import AddLog from './Components/AddLog/AddLog'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import LogList from './Components/LogList/LogList'
import RootComponent from './Components/Root/RootComponent'
<<<<<<< HEAD
import PrivateRoutes from './Components/Routes/PrivateRoutes'
=======

import privateRouteLoader from './Utils/privateRouteLoader'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootComponent />,
        loader: privateRouteLoader,
        children: [
            { path: '/', element: <Dashboard /> },
            { path: '/AddUser', element: <AddUser /> },
            { path: '/AddLog', element: <AddLog /> },
            { path: '/LogList/:id', element: <LogList /> },
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
])
>>>>>>> 8a8ba3c7edadec46a2c10f5c6768160109e67a48

function App() {
    return (
        <>
<<<<<<< HEAD
            <BrowserRouter>
                <Routes>
                    <Route element={<RootComponent />}>
                        <Route element={<PrivateRoutes />}>
                            <Route path="/AddUser" element={<AddUser />} />
                            <Route path="/AddLog" element={<AddLog />} />
                            <Route path="/Dashboard" element={<Dashboard />} />
                            <Route path="/logList" element={<LogList />} />
                        </Route>
                    </Route>
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
=======
            <RouterProvider router={router} />
>>>>>>> 8a8ba3c7edadec46a2c10f5c6768160109e67a48
        </>
    )
}
export default App
