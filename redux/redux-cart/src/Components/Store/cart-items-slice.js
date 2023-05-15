import { createSlice } from '@reduxjs/toolkit'

const cartItemsSlice = createSlice({
    name: 'cart-items',
    initialState: {
        items: [],
    },
    reducers: {
        addItem(state, action) {
            const exsistingItem = state.items.find((item) => item.id === action.payload.id)
            if (!exsistingItem) {
                console.log("true")
                state.items.push({
                    id: action.payload.id,
                    itemName: action.payload.itemName,
                    itemPrice: action.payload.itemPrice,
                    itemQuantity: 1
                })
            } else {
                exsistingItem.itemQuantity = exsistingItem.itemQuantity + 1
            }
        },
        removeItem(state, action) { },
    }
})

export const cartItemAction = cartItemsSlice.actions

export default cartItemsSlice.reducer