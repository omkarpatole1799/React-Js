import React, { useState } from "react"
import "./App.css"
import Navbar from "./Components/Header/Navbar"
import Home from "./Components/Home/Home"
import Meals from "./Components/Meals/Meals"
import Cart from "./Components/Cart/Cart"
import CartProvider from "./store/CartProvider"

function App() {
  const [modal, setModal] = useState(false)
  const cartOpenHandler = () => {
    setModal(true)
  }
  const cartCloseHandler = () => {
    setModal(false)
  }
  return (
    <CartProvider>
      {modal && <Cart onClick={cartCloseHandler} />}

      <Navbar onCartButtonHandler={cartOpenHandler} />

      <Home />

      <Meals />
    </CartProvider>
  )
}

export default App
