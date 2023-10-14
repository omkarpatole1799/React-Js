// function imports
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
// component imports
import AddUser from './Components/SignUp/AddUser'
import AddLog from './Components/AddLog/AddLog'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import LogList from './Components/LogList/LogList'
import RootComponent from './Components/Root/RootComponent'
import privateRouteLoader from './Utils/privateRouteLoader'
import Attendance from './Components/Attendance/Attendance'

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
      { path: '/addAttendance', element: <Attendance /> }
    ]
  },
  { path: '/login', element: <Login /> }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App
