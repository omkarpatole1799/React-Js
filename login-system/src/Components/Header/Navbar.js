import React, { useContext } from "react"
import Button from "../UI/Button/Button"

import classes from "./Navbar.module.css"
import AuthContext from "../../store/auth-contex"
function Navbar() {
  const ctx = useContext(AuthContext)

  return (
    <>
      {ctx.isLoggedIn && (
        <nav className={classes.nav}>
          <ul>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">ABOUT</a>
            </li>
            <li>
              <button onClick={ctx.onLogout}>LOGOUT</button>
            </li>
          </ul>
        </nav>
      )}
    </>
  )
}

export default Navbar
