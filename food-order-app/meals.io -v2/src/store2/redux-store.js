import { createStore } from 'redux'

const initialCartState = {
    cartItems: [],
}

const cartReducer = (state = initialCartState, action) => {
    if (action.type === 'addItem') {
        const currentItemIndex = state.cartItems.findIndex((item) => {
            return item.id === action.value.id
        })
        const currentItem = state.cartItems[currentItemIndex]
        let cartItem = []
        if (currentItem) {
            const updatedItem = {
                ...currentItem,
                quantity: currentItem.quantity + 1
            }
            cartItem = [...state.cartItems]
            cartItem[currentItemIndex] = updatedItem
        }
        else {
            const newItem = {
                ...action.value,
                quantity: action.value.quantity + 1
            }
            cartItem = state.cartItems.concat(newItem)
        }
        
        return {
            cartItems: cartItem,
        }
    }

    if (action.type === 'removeItem') {
        const removedItemIndex = state.cartItems.findIndex((item) => {
            return item.id === action.id
        })

        const removedItem = state.cartItems[removedItemIndex]
        let cartItem = []

        if (removedItem.quantity === 1) {
            state.cartItems.splice(removedItemIndex, 1)
            cartItem = [...state.cartItems]
        } else {
            const updatedItem = {...removedItem, quantity: removedItem.quantity - 1}
            cartItem = [...state.cartItems]
            cartItem[removedItemIndex] = updatedItem
        }
        
        return {
            cartItems: cartItem,
        }
    }
    return state
}
const store = createStore(cartReducer)

export default store

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: {
//         cartItems : []
//     },
//     reducers: {
//         addItem(state, action) {
//             console.log(state.cartItems)
//             const currentItem = state.cartItems.findIndex((item) => {
//                 return item.id === action.payload.id
//             })
//             state.cartItems.push(action.payload)
//             console.log(currentItem)
//         },
//         removeItem(state, action) { }
//     }
// })

// const store = configureStore({
//     reducer: cartSlice.reducer
// })

// export const cartActions = cartSlice.actions

// export default store