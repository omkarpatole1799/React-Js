import { Outlet } from "react-router-dom";
import NavBar from "../Components/UI/Header/Navbar";
function Root() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Root;
