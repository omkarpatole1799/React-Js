import React, { useState } from "react"
import "./App.css"
import Navbar from "./Components/Header/Navbar"
import Meals from "./Components/Meals/Meals"
import CartProvider from "./store/CartProvider"
import Footer from "./Components/UI/Footer/Footer"
import Cart2 from "./Components/Cart/Cart2"

function App() {
	const [showCart, setShowCart] = useState(true)
	const cartOpenHandler = () => {
		setShowCart(true)
	}

	const cartCloseHandler = () => {
		setShowCart(false)
	}
	console.log(showCart)
	return (
		<CartProvider>
			<Cart2 onShowCart={showCart} onCloseCart={cartCloseHandler} />

			<Navbar onShowCart={showCart} onClick={cartOpenHandler} />

			<Meals />

			<Footer />
		</CartProvider>
	)
}

export default App
