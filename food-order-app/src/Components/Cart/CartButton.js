import React, {useContext, useEffect, useState} from "react"
import Button from "../UI/Button/Button"
import CartContext from "../../store/cart-context"
import "./CartButton.css"

function CartButton(props) {
    const cartCxt = useContext(CartContext)

    const [cartButtonAnimated, setCartButtonAnimated] = useState(false)

    const totalCartItem = cartCxt.items.reduce((cur, item) => {
        return cur + item.quantity
    }, 0)

    const cartButtonClasses = `cart-button ${cartButtonAnimated ? `bump` : ''}`

    useEffect(() => {
        if (totalCartItem === 0) return

        setCartButtonAnimated(true)

        const buttonAnimationTimer = setTimeout(() => {
            setCartButtonAnimated(false)
        }, 300)

        // cleanup function
        return () => {
            clearTimeout(buttonAnimationTimer)
        }
    }, [totalCartItem])

    return (
        <Button onClick={props.onClick} className={cartButtonClasses}>
      <span className="cart-logo">
        <i className="fa-solid fa-cart-arrow-down"></i>
      </span>
            <span className="cart-btn-heading">Cart</span>
            <span className="cart-total">{totalCartItem}</span>
        </Button>
    )
}

export default CartButton
