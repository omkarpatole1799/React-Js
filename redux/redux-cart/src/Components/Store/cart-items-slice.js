import { createSlice } from '@reduxjs/toolkit'

const cartItemsSlice = createSlice({
    name: 'cart-items',
    initialState: {
        items: [],
        totalCartItems: 0,
    },
    reducers: {
        replaceCartData(state, action) {
            state.items = action.payload.items
            state.totalCartItems = action.payload.totalCartItems
         },
        addItem(state, action) {
            const currentItem = action.payload
            const exsistingItem = state.items.find((item) => item.itemId === currentItem.itemId)
            state.totalCartItems++
            if (!exsistingItem) {
                state.items.push({
                    itemId: currentItem.itemId,
                    itemName: currentItem.itemName,
                    itemPrice: currentItem.itemPrice,
                    itemQuantity: currentItem.itemQuantity + 1,
                })
            } else {
                exsistingItem.itemQuantity = exsistingItem.itemQuantity + 1
            }
        },
        removeItem(state, action) {
            const currentItem = action.payload
            state.totalCartItems--
            const exsistingItem = state.items.find((item) => {
                return item.itemId === currentItem.itemId
            })
            if (currentItem.itemQuantity === 1) {
                // remove item
                state.items = state.items.filter((item) => {
                    return item.itemId !== currentItem.itemId
                })
            } else {
                //decrease quantity by 1
                exsistingItem.itemQuantity--
            }

        },
    }
})

export const cartItemAction = cartItemsSlice.actions

export default cartItemsSlice.reducer