import React from 'react'
import Button from '../UI/Button/Button'
import classes from './Navbar.module.css'
function Navbar(props) {
    return (
        <>
            {props.isLoggedIn && (
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <a href="">HOME</a>
                        </li>
                        <li>
                            <a href="">ABOUT</a>
                        </li>
                        <li>
                            <button onClick={props.onLogout}>LOGOUT</button>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    )
}

export default Navbar
