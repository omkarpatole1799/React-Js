import React from "react"
import Card from "../UI/Card/Card"
import MealsList from "./MealsList"
import classes from "./Meals.module.css"

// image imports
import tomato from "../../assets/images/tomato.jpg"
import potato from "../../assets/images/potato-fry.jpg"
import chilli from "../../assets/images/chilli.jpg"
import brokoli from "../../assets/images/brokoli.jpg"
import vegmix from "../../assets/images/veggie-mix.jpg"
const DUMMY_MEALS = [
  // {
  //   id: "m1",
  //   mealName: "Tomato",
  //   description: "Special fry",
  //   price: 20,
  //   image: tomato,
  // quantity: 0,
  // },
  {
    id: "m2",
    mealName: "Puran poli",
    description: "Indian special",
    price: 620,
    image: vegmix,
    quantity: 0,
  },
  {
    id: "m3",
    mealName: "Potato Fry",
    description: "Chipped potato",
    price: 100,
    image: potato,
    quantity: 0,
  },
  {
    id: "m4",
    mealName: "Chilli fry",
    description: "All veggies mix",
    price: 35,
    image: chilli,
    quantity: 0,
  },
  {
    id: "m5",
    mealName: "Potato Fry",
    description: "Fried",
    price: 60,
    image: vegmix,
    quantity: 0,
  },
  {
    id: "m6",
    mealName: "Mix",
    description: "Mix veg",
    price: 80,
    image: brokoli,
    quantity: 0,
  },
]

function Meals(props) {
  return (
    <Card>
      <div>
        <h3 className={classes.mealsListHeading}>Order Now!</h3>
      </div>
      <div className="container ">
        <div className="row d-flex justify-content-center">
          <MealsList meals={DUMMY_MEALS} />
        </div>
      </div>
    </Card>
  )
}

export default Meals
