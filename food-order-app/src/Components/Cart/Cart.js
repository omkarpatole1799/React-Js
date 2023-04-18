import React from "react"
import Button from "../UI/Button/Button"
import Modal from "../UI/Modal"
import classes from "./Cart.module.css"
function Cart() {
  const mealData = [
    {
      mealName: "Tomato",
      price: 12.99,
      quantity: "2",
      amount: 25.0,
    },
  ]

  return (
    <Modal>
      <ul className={classes.cart}>
        <div className={classes.cartItem}>
          {mealData.map((meal) => {
            return (
              <li key={meal.id} className={classes.mealItem}>
                <div className="meal-info">
                  <p>{meal.mealName}</p>
                  <p>{meal.description}</p>
                  <p>$ {meal.price.toFixed(2)}</p>
                </div>
                <div className={classes.mealItemQuantityTotal}>
                  <span>Quantity</span>
                  <span> x {meal.quantity} </span>
                </div>
              </li>
            )
          })}
        </div>
        <div className={classes.cartSummary}>
          <div className={classes.cartTotal}>
            <span>Total amount</span>
            <span>$ 25.99</span>
          </div>
          <div className={classes.cartButton}>
            <Button className={classes.cartCloseButton}>Close</Button>
            <Button className={classes.cartOrderButton}>Order</Button>
          </div>
        </div>
      </ul>
    </Modal>
  )
}

export default Cart
