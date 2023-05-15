import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartUI-slice";
import cartItemsSlice from "./cart-items-slice";

const store = configureStore({
    reducer: {
        cartUI: cartSlice,
        cartItems: cartItemsSlice
    }
})

export default store
