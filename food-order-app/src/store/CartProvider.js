import React, { useReducer } from "react"
import CartContext from "./cart-context"

const defaultCartState = {
  items: [],
  totalAmount: 0,
  totalItemCount: 0,
}
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const exsistingItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id
    })
    
    const exsistingCartItem = state.items[exsistingItemIndex]
    const currentCartItem = action.item
    let cartItems = []
    let totalItemCount = 0
    if (exsistingCartItem) {
      const updatedItem = {
        ...exsistingCartItem,
        quantity: exsistingCartItem.quantity + 1,
      }
      cartItems = [...state.items]
      cartItems[exsistingItemIndex] = updatedItem
      totalItemCount = updatedItem
    } else {
      cartItems = state.items.concat(action.item)
      totalItemCount = currentCartItem
    }
    const totalAmount = cartItems
      .map((item) => {
        return item.quantity * item.price
      })
      .reduce((cur, el) => {
        return cur + el
      }, 0)
    return {
      items: cartItems,
      totalAmount: totalAmount,
      totalItemCount: totalItemCount,
    }
  }
  if (action.type === "REMOVE_ITEM") {
    // const removedItemIndex = state.items.findIndex((item) => {
    //   return item.id === action.id
    // })
    // const removedItem = state.items[removedItemIndex]
    // let updatedItems = []
    // let itemQuantity = 1
    // if (removedItem.quantity === 1) {
    //   updatedItems = state.items.filter((item) => {
    //     return item.id !== action.id
    //   })
    // } else {
    //   const updateItem = { ...removedItem, quantity: removedItem.quantity - 1 }
    //   updatedItems = [...state.items]
    //   updatedItems[removedItemIndex] = updateItem
    //   itemQuantity = updateItem
    // }
    // const totalAmount = updatedItems
    //   .map((item) => {
    //     return item.quantity * item.price
    //   })
    //   .reduce((cur, itemPrice) => {
    //     return cur + itemPrice
    //   }, 0)

    // return {
    //   items: updatedItems,
    //   totalAmount: totalAmount,
    //   itemQuantity: itemQuantity,
    // }
    console.log("removed")
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
    totalAmount: cartState.totalAmount,
    totalItemCount: cartState.totalItemCount,
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
