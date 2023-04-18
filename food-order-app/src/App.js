import React, { useState } from "react"
import "./App.css"
import Navbar from "./Components/Header/Navbar"
import Home from "./Components/Home/Home"
import Meals from "./Components/Meals/Meals"
import Cart from "./Components/Cart/Cart"

function App() {
  return (
    <>
      <Cart />

      <Navbar />

      <Home />

      <Meals />
    </>
  )
}

export default App
