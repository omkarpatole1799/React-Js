import React from "react"
import Card from "../UI/Card/Card"
import MealsList from "./MealsList"
import classes from './Meals.module.css'
const DUMMY_MEALS = [
  {
    id: "m1",
    mealName: "Tomato",
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
    id: "m3",
    mealName: "Potato Fry",
    description: "Chipped potato fry",
    price: 100,
  },
  {
    id: "m4",
    mealName: "Veggiee Mix",
    description: "All veggies mix",
    price: 230,
  },
]

function Meals(props) {
  return (
    <Card>
      <div>
        <h3 className={classes.mealsListHeading}>Order Now!</h3>
      </div>
      <ul>
        <MealsList meals={DUMMY_MEALS} />
      </ul>
    </Card>
  )
}

export default Meals
