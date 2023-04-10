import React from 'react'
import Navbar from './Navbar'
import styles from './Header.module.css'
function Header(props) {
    return (
        <header className={styles.main_header}>
            <h2>header.io</h2>
            <Navbar isLoggedIn={props.isLoggedIn} onLogout={props.onLogout} />
        </header>
    )
}

export default Header
