import React, {useContext} from "react"
import classes from "./Cart.module.css"
import Button from "../UI/Button/Button";
import CartContext from '../../store/cart-context'

function CartItem(props) {

    return (<>
        <li key={props.meal.id} className={classes.mealItem}>
            <div className={classes.mealInfo}>
                <span>{props.meal.mealName}</span>
                <span>{props.meal.description}</span>
                <span>$ {props.meal.price.toFixed(2)}</span>

            </div>
            <div className={classes.mealItemQuantityTotal}>
                <span>Quantity</span>
                <div>
                    <Button onClick={props.onAddItem}
                            className={classes.quantityButton}>+</Button>
                    <span> x {props.meal.quantity} </span>
                    <Button className={classes.quantityButton}>-</Button>
                </div>
            </div>
            <div className={classes.mealTotal}>
                <span>Total amount</span>
                <div className={classes.totalDescription}>
                    <span>$ {(props.meal.price * props.meal.quantity).toFixed(2)}</span>
                </div>
            </div>
            <div className={classes.addRemoveBtn}>

            </div>
        </li>
    </>)
}

export default CartItem
