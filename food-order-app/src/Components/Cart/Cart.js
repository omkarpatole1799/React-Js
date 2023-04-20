import React, {useContext, useState} from "react"
import Button from "../UI/Button/Button"
import Modal from "../UI/Modal"
import classes from "./Cart.module.css"
import CartItem from "./CartItem"
import CartContext from "../../store/cart-context";

function Cart(props) {
    const [isCartEmpty, setIsCartEmpty] = useState(false)
    const cartCtx = useContext(CartContext)

    const totalAmount = cartCtx.items.map((item) => {
        return item.quantity * item.price
    }).reduce((cur, el) => {
        return cur + el
    }, 0)

    const emptyCart = () => {
        return <span>Empty Cart! Shop too see in cart </span>
    }
    const cartNotEmpty = () => {
        return <>
            <span>Total amount</span> <span>$ {totalAmount}</span>
        </>
    }

    return (<Modal onClick={props.onClick}>
        <ul className={classes.cart}>
            <div className={classes.cartItem}>
                {cartCtx.items.map((item) => {
                    return <CartItem key={item.id} onClick={props.onClick} meal={item}/>
                })}
            </div>
        </ul>

        <div className={classes.cartSummary}>
            <div className={classes.cartTotal}>
                {(totalAmount !== 0) ? cartNotEmpty() : emptyCart()}

            </div>

            <div className={classes.cartButton}>
                <Button onClick={props.onClick} className={classes.cartCloseButton}>
                    Close
                </Button>
                {totalAmount !== 0 && <Button className={classes.cartOrderButton}>Order</Button>}
            </div>
        </div>


        {/*{totalAmount !== 0 && <div className={classes.cartSummary}>*/}
        {/*    <div className={classes.cartTotal}>*/}
        {/*        <span>Total amount</span>*/}
        {/*        <span>$ {totalAmount}</span>*/}
        {/*    </div>*/}

        {/*    <div className={classes.cartButton}>*/}
        {/*        <Button onClick={props.onClick} className={classes.cartCloseButton}>*/}
        {/*            Close*/}
        {/*        </Button>*/}
        {/*        <Button className={classes.cartOrderButton}>Order</Button>*/}
        {/*    </div>*/}
        {/*</div>}*/}

        {/*{totalAmount === 0 && <div className={classes.cartSummary}>*/}
        {/*    <div className={classes.cartTotal}>*/}
        {/*        <span>Empty Cart, Shop items too see in cart</span>*/}
        {/*    </div>*/}
        {/*    <div className={classes.cartButton}>*/}
        {/*        <Button onClick={props.onClick} className={classes.cartCloseButton}>Close </Button>*/}
        {/*    </div>*/}
        {/*</div>}*/}
    </Modal>)
}

export default Cart
