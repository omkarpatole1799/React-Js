import {createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        displayCart: false
    },
    reducers: {
        toggleCart(state) {
            state.displayCart = !state.displayCart
        }
    }
})
export const cartActions = cartSlice.actions

export default cartSlice.reducer
