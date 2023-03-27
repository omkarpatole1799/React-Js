import React from 'react'
import styles from './Button.module.css'
function Button(props) {
    return (
        <button
            type={props.type || 'button'}
            className={`${styles.button} ${props.className}`}
            disabled={props.disabled}>
            {props.children}
        </button>
    )
}

export default Button
