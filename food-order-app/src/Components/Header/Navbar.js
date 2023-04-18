import React from "react"
import CartButton from "../Cart/CartButton"
import "./Navbar.css"
function Navbar(props) {
  return (
    <>
      <div className="navbar bg-primary">
        <div className="ms-5">
          <span className="navbar-brand mb-0 h1 text-white">meals.io</span>
        </div>
        <div className="me-5">
          <CartButton selectedMeal={props.onSelectedMeal}></CartButton>
        </div>
      </div>
    </>
  )
}

export default Navbar
