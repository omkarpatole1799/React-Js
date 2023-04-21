import React, {useReducer} from "react"
import CartContext from "./cart-context"
import cart from "../Components/Cart/Cart";

const defaultCartState = {
    items: [], totalAmount: 0,
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
                ...exsistingCartItem, quantity: (exsistingCartItem.quantity + action.item.quantity)
            }
            cartItems = [...state.items]
            cartItems[exsistingItemIndex] = updatedItem
        } else {
            cartItems = state.items.concat(action.item)
        }
        const totalAmount = cartItems.map((item) => {
            return item.quantity * item.price
        }).reduce((cur, el) => {
            return cur + el
        }, 0)

        return {
            items: cartItems, totalAmount: totalAmount,
        }
    }
    if (action.type === "REMOVE_ITEM") {
        const removedItemIndex = state.items.findIndex((item) => {
            return item.id === action.id
        })
        const removedItem = state.items[removedItemIndex]
        let updatedItems
        if (removedItem.quantity === 1) {
            updatedItems = state.items.filter((item) => {
                return item.id !== action.id
            })
        } else {
            const updateItem = {...removedItem, quantity: removedItem.quantity - 1}
            updatedItems = [...state.items]
            updatedItems[removedItemIndex] = updateItem
        }
        const totalAmount = updatedItems.map((item) => {
            return item.quantity * item.price
        }).reduce((cur, itemPrice) => {
            return cur + itemPrice
        }, 0)
        return {
            items: updatedItems,
            totalAmount: totalAmount,
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
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    }

    return (<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>)
}
export default CartProvider
