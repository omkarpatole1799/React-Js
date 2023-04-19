import React from "react"
import Button from "../UI/Button/Button"
import Modal from "../UI/Modal"
import classes from "./Cart.module.css"
import CartItem from "./CartItem"
function Cart(props) {
  const mealData = [
    {
      id: "m1",
      mealName: "Tomato",
      price: 12.99,
      quantity: "2",
      amount: 25.0,
    },
  ]

  return (
    <Modal onClick={props.onClick}>
      <ul className={classes.cart}>
        <div className={classes.cartItem}>
          <CartItem items={mealData} />
        </div>
        <div className={classes.cartSummary}>
          <div className={classes.cartTotal}>
            <span>Total amount</span>
            <span>$ 25.99</span>
          </div>
          <div className={classes.cartButton}>
            <Button onClick={props.onClick} className={classes.cartCloseButton}>
              Close
            </Button>
            <Button className={classes.cartOrderButton}>Order</Button>
          </div>
        </div>
      </ul>
    </Modal>
  )
}

export default Cart
