import React from "react"
import Card from "../UI/Card/Card"
import MealsList from "./MealsList"

const DUMMY_MEALS = [
  {
    id: "m1",
    mealName: "tomato fry",
    description: "Special fry",
    price: 20,
  },
  {
    id: "m2",
    mealName: "puran poli",
    description: "Indian special",
    price: 620,
  },
  {
    id: "m1",
    mealName: "Potato Fry",
    description: "Chipped potato fry",
    price: 100,
  },
  {
    id: "m1",
    mealName: "Veggiee Mix",
    description: "All veggies mix",
    price: 230,
  },
]

function Meals() {
  return (
    <Card>
      <ul>
        <MealsList meals={DUMMY_MEALS} />
      </ul>
    </Card>
  )
}

export default Meals
