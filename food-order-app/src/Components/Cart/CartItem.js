import React from "react"
import classes from "./Cart.css"
import CartItemAddRemoveBtn from "./CartItemAddRemoveBtn"

function CartItem(props) {
  return (
    <>
      <tr>
        <td>{props.meal.mealName}</td>
        <td><CartItemAddRemoveBtn button={props.button} item={props.meal} /></td>
        <td>$ {(props.meal.price).toFixed(2)}</td>
        <td> $ {(props.meal.price * props.meal.quantity).toFixed(2)}</td>
      </tr>

    </>
  )
}

export default CartItem
