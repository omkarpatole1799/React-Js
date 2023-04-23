import React, { useReducer } from "react"
import CartContext from "./cart-context"


// =========
import tomato from "../assets/images/tomato.jpg"
import potato from "../assets/images/potato-fry.jpg"
import chilli from "../assets/images/chilli.jpg"
import brokoli from "../assets/images/brokoli.jpg"
import vegmix from "../assets/images/veggie-mix.jpg"

const DUMMY_MEALS = [
  {
    id: "m1",
    mealName: "Tomato",
    description: "Special fry",
    price: 20,
    image: tomato,
    quantity: 0,
  },
  {
    id: "m2",
    mealName: "Puran poli",
    description: "Indian special",
    price: 620,
    image: vegmix,
    quantity: 0,
  },
  {
    id: "m3",
    mealName: "Potato Fry",
    description: "Chipped potato",
    price: 100,
    image: potato,
    quantity: 0,
  },
  {
    id: "m4",
    mealName: "Chilli fry",
    description: "All veggies mix",
    price: 35,
    image: chilli,
    quantity: 0,
  },
  {
    id: "m5",
    mealName: "Potato Fry",
    description: "Fried",
    price: 60,
    image: vegmix,
    quantity: 0,
  },
  {
    id: "m6",
    mealName: "Mix",
    description: "Mix veg",
    price: 80,
    image: brokoli,
    quantity: 0,
  },
]
// =======

const defaultCartState = {
  items: DUMMY_MEALS,
  totalAmount: 0,
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
    } else {
      cartItems = state.items.concat(action.item)
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
