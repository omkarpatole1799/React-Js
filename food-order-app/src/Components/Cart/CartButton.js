import React, {useContext} from "react"
import Button from "../UI/Button/Button"
import CartContext from "../../store/cart-context"
import "./CartButton.css"

function CartButton(props) {
    const cartCxt = useContext(CartContext)
    const totalCartItem = cartCxt.items.reduce((cur, item) => {
        return cur + item.quantity
    }, 0)

    return (<Button onClick={props.onClick} className="cart-button">
      <span className="cart-logo">
        <i className="fa-solid fa-cart-arrow-down"></i>
      </span>
        <span className="cart-btn-heading">Cart</span>
        <span className="cart-total">{totalCartItem}</span>
    </Button>)
}

export default CartButton
