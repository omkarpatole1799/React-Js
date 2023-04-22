import React, { useContext } from "react"
import Button from "../UI/Button/Button"
import classes from "./CartItemAddRemoveButton.module.css"
import CartContext from "../../store/cart-context"
function CartItemAddRemoveBtn(props) {
  const cartCtx = useContext(CartContext)

  const onAddItemHandler = (item) => {

    cartCtx.addItem({ ...item, quantity: 1 })
  }
  const onRemoveItemHandler = (id) => {
    cartCtx.removeItem(id)
  }

  return (
    <>
      <Button
        onClick={onAddItemHandler.bind(null, props.item)}
        className={classes.quantityButton}
      >
        +
      </Button>
      <span> x {cartCtx.totalItemCount.quantity}</span>
      <Button
        onClick={onRemoveItemHandler.bind(null, props.item.id)}
        className={classes.quantityButton}
      >
        -
      </Button>
    </>
  )
}

export default CartItemAddRemoveBtn
