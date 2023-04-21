import React, {useState} from "react"
import CartButton from "../Cart/CartButton"
import classes from "./Navbar.module.css"

function Navbar(props) {
    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarHeading}>
                <span>meals.io</span>
            </div>
            <ul className={classes.navbarItems}>
                <li>
                    <span>Home</span>
                </li>
                <li>
                    <span>Order</span>
                </li>
                <li className={classes.navbarCartButton}>
                    <CartButton onClick={props.onCartButtonHandler}/>
                </li>
            </ul>
        </nav>)
}

export default Navbar
