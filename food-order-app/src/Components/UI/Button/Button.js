import React from "react"
import classes from './Button.module.css'
function Button(props) {
  return (
    <>
      <button onClick={props.onClick} className={props.className}>{props.children}</button>
    </>
  )
}

export default Button
