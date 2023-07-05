import React, { useState, useContext } from "react"
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import Login from "./Components/Login/Login"
import Button from "./Components/UI/Button/Button"
import Modal from "./Components/UI/Modal/Modal"
import AuthContext from "./store/auth-contex"

function App() {
  const [modal, setModal] = useState(false)
  const ctx = useContext(AuthContext)

  const modalHandler = () => {
    setModal({
      heading: "Error",
      description: "there was an error",
    })
  }
  const closeModalHandler = () => {
    setModal(null)
  }

  return (
    <>
      {modal && (
        <Modal
          heading={modal.heading}
          description={modal.description}
          onClick={closeModalHandler}
        />
      )}
      <Header />
      {!ctx.isLoggedIn && <Login />}
      {ctx.isLoggedIn && <Home />}
      <Button onClick={modalHandler}>Modal</Button>
    </>
  )
}

export default App
