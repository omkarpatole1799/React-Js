import React, { useState } from "react"
import "./App.css"
import Navbar from "./Components/Header/Navbar"

import Meals from "./Components/Meals/Meals"
import Cart from "./Components/Cart/Cart"

import CartProvider from "./store/CartProvider"
import Footer from "./Components/UI/Footer/Footer"

function App() {
	const [showCart, setShowCart] = useState(false)
	const cartCloseHandler = () => {
		setShowCart(false)
	}
	const cartOpenHandler = () => {
		setShowCart(true)
	}
	return (
		<CartProvider>
			{showCart && <Cart onClick={cartCloseHandler} />}

			<Navbar onCartButtonHandler={cartOpenHandler} />

			<Meals />

			<Footer />
		</CartProvider>
	)
}

export default App
