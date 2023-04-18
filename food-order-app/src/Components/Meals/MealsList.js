import React, { useState } from "react"
import Input from "../UI/Input"
import "./MealList.css"
import Button from "../UI/Button/Button"
function MealsList(props) {
  return (
    <>
      {props.meals.map((meal) => (
        <li key={meal.id} className="meal-item">
          <div className="meal-info">
            <p>{meal.mealName}</p>
            <p>{meal.description}</p>
            <p>$ {meal.price.toFixed(2)}</p>
          </div>
          <div className="meal-input">
            <Input
              label={"Quantity"}
              input={{
                id: {},
                type: "number",
                min: "0",
                max: "5",
                step: "1",
                defaultValue: "0",
              }}
            ></Input>
            <Button>Add</Button>
          </div>
        </li>
      ))}
    </>
  )
}

export default MealsList
