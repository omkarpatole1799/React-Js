import React from "react"
import CartButton from "../Cart/CartButton"
function Navbar() {
  return (
    <>
      <div className="navbar bg-primary">
        <div className="d-flex justify-content-between">
          <div className="container-fluid align-self-center  ">
            <span className="navbar-brand mb-0 h1 text-white">meals.io</span>
          </div>
          <div className="container-fluid align-self-center ">
            <CartButton></CartButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
