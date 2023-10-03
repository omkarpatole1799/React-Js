// function imports
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// component imports
import AddUser from './Components/SignUp/AddUser'
import AddLog from './Components/AddLog/AddLog'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import LogList from './Components/LogList/LogList'
import RootComponent from './Components/Root/RootComponent'
import PrivateRoutes from './Components/Routes/PrivateRoutes'

function App() {
    return (
        <>
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
        </>
    )
}
export default App
