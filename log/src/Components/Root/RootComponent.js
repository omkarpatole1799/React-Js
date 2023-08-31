import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"

function RootComponent() {
  return (
    <div className="row">
        <div className="col-2">
            <Navbar></Navbar>
        </div>
        <div className="col-10">
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default RootComponent