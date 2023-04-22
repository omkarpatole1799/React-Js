import React from "react"
import Button from "../UI/Button/Button"
import classes from "./CartItemAddRemoveButton.module.css"
function CartItemAddRemoveBtn(props) {
  return (
    <>
      <Button onClick={props.onAddItem} className={classes.quantityButton}>
        +
      </Button>
      <span> x {props.quantity} </span>
      <Button onClick={props.onRemoveItem} className={classes.quantityButton}>
        -
      </Button>
    </>
  )
}

export default CartItemAddRemoveBtn
