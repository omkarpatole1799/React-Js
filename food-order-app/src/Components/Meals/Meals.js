import React from "react"
import Card from "../UI/Card/Card"
import MealsList from "./MealsList"

const DUMMY_MEALS = [
  {
    id: "m1",
    mealName: "Tomato",
    description: "Special fry",
    price: 20,
    quantity: 0,
  },
  {
    id: "m2",
    mealName: "puran poli",
    description: "Indian special",
    price: 620,
    quantity: 0,
  },
  {
    id: "m3",
    mealName: "Potato Fry",
    description: "Chipped potato fry",
    price: 100,
    quantity: 0,
  },
  {
    id: "m4",
    mealName: "Veggiee Mix",
    description: "All veggies mix",
    price: 230,
    quantity: 0,
  },
]

function Meals(props) {
  return (
    <Card>
      <ul>
        <MealsList meals={DUMMY_MEALS} />
      </ul>
    </Card>
  )
}

export default Meals
