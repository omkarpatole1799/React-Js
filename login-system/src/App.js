import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Button from "./Components/UI/Button/Button";
import Modal from "./Components/UI/Modal/Modal";

function App() {
  const [modal, setModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const checkIfAlreadyLoggedIn = localStorage.getItem("isLoggedIn");
    if (checkIfAlreadyLoggedIn === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  const formSubmitHandler = (inputValue) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  const logoutButtonHandler = () => {
    localStorage.setItem("isLoggedIn", "0");
    setIsLoggedIn(false);
  };
  const modalHandler = () => {
    setModal({
      heading: "Error",
      description: "there was an error",
    });
  };
  const closeModalHandler = () => {
    setModal(null);
  };
  return (
    <>
      {modal && (
        <Modal
          heading={modal.heading}
          description={modal.description}
          onClick={closeModalHandler}
        />
      )}
      <Header isLoggedIn={isLoggedIn} onLogout={logoutButtonHandler} />
      {isLoggedIn && <Home />}
      {!isLoggedIn && <Login onSubmitForm={formSubmitHandler} />}
      <Button onClick={modalHandler}>Modal</Button>
    </>
  );
}

export default App;
