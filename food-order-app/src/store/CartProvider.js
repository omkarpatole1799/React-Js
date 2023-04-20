import React, {useReducer} from "react"
import CartContext from "./cart-context"

const defaultCartState = {
    items: [],
}
const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const exsistingItemIndex = state.items.findIndex((item) => {
            return item.id === action.item.id
        })
        const exsistingCartItem = state.items[exsistingItemIndex]

        let cartItems
        if (exsistingCartItem) {
            const updatedItem = {
                ...exsistingCartItem,
                quantity: (exsistingCartItem.quantity + action.item.quantity)
            }
            cartItems = [...state.items]
            cartItems[exsistingItemIndex] = updatedItem
        } else {
            cartItems = state.items.concat(action.item)
        }

        return {
            items: cartItems
        }
    }
    return defaultCartState
}

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemHandler = (item) => {
        dispatchCartAction({type: "ADD_ITEM", item: item})
    }
    const removeItemHandler = (id) => {
        dispatchCartAction({type: "REMOVE_ITEM", id: id})
    }

    const cartContext = {
        items: cartState.items, addItem: addItemHandler, removeItem: removeItemHandler,
    }

    return (<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>)
}
export default CartProvider
