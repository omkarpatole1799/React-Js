import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        displayCart: false,
        notification: null,
    },
    reducers: {
        toggleCart(state) {
            state.displayCart = !state.displayCart
        },
        showNotification(state, action) {
            const notificationActions = action.payload
            state.notification = ({
                status: notificationActions.status,
                message: notificationActions.message,
                description: notificationActions.description,
            })
        }
    }
})
export const UIActions = cartSlice.actions

export default cartSlice.reducer
