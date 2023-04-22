import React, { useContext } from "react"
import CartContext from "../../store/cart-context"
import CartItemAddRemoveBtn from "../Cart/CartItemAddRemoveBtn"
function MealsList(props) {
  const cartCtx = useContext(CartContext)
  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 })
  }
  const removeItemHandler = (id) => {
    cartCtx.removeItem(id)
  }
  return (
    <>
      {props.meals.map((item) => {
        return (
          <div key={item.id} className="card m-2" style={{ width: "13rem" }}>
            <img src={item.image} className="mt-2" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.mealName}</h5>
              <div className="card-text">
                <div>{item.description}</div>
                <div>$ {item.price}</div>
                <CartItemAddRemoveBtn
                  onAddItem={addItemHandler.bind(null, item)}
                  onRemoveItem={removeItemHandler.bind(null, item.id)}
                />
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default MealsList
