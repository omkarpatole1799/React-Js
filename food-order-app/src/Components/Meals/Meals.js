import React, {useContext} from "react"
import Card from "../UI/Card/Card"
import MealsList from "./MealsList"
import classes from "./Meals.module.css"
import cartContext from "../../store/cart-context";


function Meals(props) {
    const cartCtx = useContext(cartContext)
    return (
        <Card>
            <div>
                <h3 className={classes.mealsListHeading}>Order Now!</h3>
            </div>
            <div className="container ">
                <div className="row d-flex justify-content-center">
                    <MealsList meals={cartCtx.items}/>
                </div>
            </div>
        </Card>
    )
}

export default Meals
