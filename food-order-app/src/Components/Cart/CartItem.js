import React from "react"
import classes from "./Cart.module.css"

function CartItem(props) {
  return (
    <>
      {props.items.map((meal) => {
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
    </>
  )
}
export default CartItem
