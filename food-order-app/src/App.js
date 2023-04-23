import React, {useState} from "react"
import "./App.css"
import Navbar from "./Components/Header/Navbar"
import Home from "./Components/Home/Home"
import Meals from "./Components/Meals/Meals"
import Cart from "./Components/Cart/Cart"
import CartUI from "./Components/Cart/CartUI"
import CartProvider from "./store/CartProvider"
import Footer from "./Components/UI/Footer/Footer"
import Sidebar from "./Components/UI/Sidebar/Sidebar";


function App() {
    const [showCart,setShowCart] = useState(false)
    const cartCloseHandler = ()=>{
        setShowCart(false)
    }
    const cartOpenHandler = () => {
        setShowCart(true)
    }
    return (
        <CartProvider>
            {showCart && <Cart onClick={cartCloseHandler}/>}

            <Navbar onCartButtonHandler={cartOpenHandler}/>

            {/*<Home />*/}

            <Meals/>

            <Footer/>
        </CartProvider>
    )
}

export default App
