import React from "react"

function MealsList(props) {
  return (
    <>
      {props.meals.map((meal) => (
        <li>{meal.mealName}</li>
      ))}
    </>
  )
}

export default MealsList
