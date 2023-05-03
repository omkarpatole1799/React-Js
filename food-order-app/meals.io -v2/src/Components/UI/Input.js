import React, { useState, useContext } from "react"
import CartContext from "../../store/cart-context"
import Button from "../UI/Button/Button"
function Input(props) {
  const [mealQuantity, setMealQuantity] = useState("")
  const cartCtx = useContext(CartContext)

  const mealQuantityHandler = (e) => {
    const mealQty = e.target.value
    setMealQuantity(mealQty)
  }

  const formSubmitHandler = (e) => {
    e.preventDefault()
    cartCtx.addItem({
      id: props.meal.id,
      mealName: props.meal.mealName,
      price: props.meal.price,
      quantity: +mealQuantity,
    })
    setMealQuantity("")
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="props.input.id"> {props.label}</label>
      <input
        onChange={mealQuantityHandler}
        value={mealQuantity}
        {...props.input}
      />
      <Button type="submit">
        <i className="fa-solid fa-cart-arrow-down p-2"></i>
      </Button>
    </form>
  )
}

export default Input
