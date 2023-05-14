import React, { useState } from "react"
import "./App.css"
import Navbar from "./Components/Header/Navbar"
import Meals from "./Components/Meals/Meals"
import Footer from "./Components/UI/Footer/Footer"
import Cart2 from "./Components/Cart/Cart2"

function App() {
	const [showCart, setShowCart] = useState(false)
	const cartOpenHandler = () => {
		setShowCart(true)
	}
	const cartCloseHandler = () => {
		setShowCart(false)
	}
	return (
		<>
			<Cart2 showCart={showCart} onCloseCart={cartCloseHandler} />

			<Navbar showCart={showCart} onClick={cartOpenHandler} />

			<Meals />

			<Footer />
		</>
	)
}

export default App
