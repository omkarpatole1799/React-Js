import React from "react"
import Navbar from "./Navbar"
import styles from "./Header.module.css"
function Header() {
  return (
    <header className={styles.main_header}>
      <h2>header.io</h2>
      <Navbar />
    </header>
  )
}

export default Header
