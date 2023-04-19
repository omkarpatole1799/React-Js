import React, { useContext } from "react"
import Button from "../UI/Button/Button"
import shoppingCart from "../../assets/images/shopping-cart.png"
import CartContext from "../../store/cart-context"
import "./CartButton.css"

function CartButton(props) {
  const cartCxt = useContext(CartContext)
  const totalCartItem = cartCxt.items.reduce((cur, item) => {
    return cur + item.quantity
  }, 0)
  return (
    <Button onClick={props.onClick} className="btn cart-button">
      <span className="cart-logo">
        <img src={shoppingCart} />
      </span>
      <span className="cart-heading">Cart</span>
      <span className="cart-total">{totalCartItem}</span>
    </Button>
  )
}

export default CartButton
