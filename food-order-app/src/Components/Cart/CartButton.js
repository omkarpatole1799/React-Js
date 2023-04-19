import React from "react"
import Button from "../UI/Button/Button"
import shoppingCart from "../../assets/images/shopping-cart.png"

import "./CartButton.css"

function CartButton(props) {
  return (
    <Button onClick={props.onClick} className="btn cart-button">
      <span className="cart-logo">
        <img src={shoppingCart} />
      </span>
      <span className="cart-heading">Cart</span>
      <span className="cart-total">5</span>
    </Button>
  )
}

export default CartButton
