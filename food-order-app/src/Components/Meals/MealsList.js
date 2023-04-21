import React from "react"
import Input from "../UI/Input"
import "./MealList.css"

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
                                id: meal.id,
                                min: '1',
                                max: '5',
                                type: "number",
                            }}
                            meal={meal}
                        ></Input>
                    </div>
                </li>
            ))}
        </>
    )
}

export default MealsList
