import React from 'react'
import classes from './Footer.module.css'

function Footer() {
    return <div className={classes.footer}>
        <div className={classes.social}>
            <span><i className="fa-brands fa-twitter"></i></span>
            <span><i className="fa-brands fa-linkedin"></i></span>
            <span><i className="fa-brands fa-instagram"></i></span>
        </div>
        <div className={classes.info}>
            <span>Info</span>
            <span>Support</span>
            <span>Marketing</span>
        </div>
        <div className={classes.policy}>
            <span>Terms of use</span>
            <span>Privacy  Policy</span>
        </div>
        <div className={classes.copyright}>
            <span>© 2023 Omkar Patole</span>
        </div>

    </div>
}

export default Footer