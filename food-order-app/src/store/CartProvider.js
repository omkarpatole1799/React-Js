import React, { useReducer } from "react"
import CartContext from "./cart-context"

const defaultCartState = {
  items: [],
  totalCartItem: 0,
}

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const cartItems = state.items.concat(action.item)
    const cartItemTotal = action.item.quantity
    console.log(cartItems)
    return {
      items: cartItems,
      totalCartItem: cartItemTotal,
    }
  }
  return defaultCartState
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  )

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item })
  }
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id })
  }
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalCartItem,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}
export default CartProvider
