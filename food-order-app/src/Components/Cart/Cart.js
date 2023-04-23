import React, {useContext, useState} from "react"
import "./Cart.css"
import CartContext from "../../store/cart-context"
import CartItemAddRemoveBtn from "./CartItemAddRemoveBtn";
import Modal from "../UI/Modal";
import Button from "../UI/Button/Button";

function Cart(props) {
    const cartCtx = useContext(CartContext)

    // add item handler
    const addItemHandler = (item) => {
        cartCtx.addItem({...item, quantity: 1})
    }
    const removeItemHandler = (id) => {
        cartCtx.removeItem(id)
    }
    const totalAmount = cartCtx.totalAmount

    const emptyCart = () => {
        return <div className='container border rounded-5 p-4 d-flex justify-content-between'><span>Empty Cart! Shop too see in cart </span>
            <Button onClick={props.onClick} className='btn btn-primary'>Continue Shopping</Button>
        </div>
    }

    const filteredItem = cartCtx.items.filter((item) => {
        return item.quantity > 0
    })

    return (<>
        {totalAmount === 0 && emptyCart()}
        {totalAmount > 0 &&

            <div className='m-4 border rounded-5 p-4 shopping-cart'>
                <div className='row'>

                    <div className='col-md-9 '>
                        <h6>
                            Shopping Cart
                        </h6>
                        <hr/>
                        <div className='row d-flex align-items-center'>
                            <div className='col-6 d-flex ps-2'>
                                <p className='mb-0'>Product Details</p>
                            </div>
                            <div className='col-2'>
                                <p className='pb-0'>Quantity</p>
                            </div>
                            <div className='col-2'>
                                <p className='pb-0'>Price</p>
                            </div>
                            <div className='col-2'>
                                <p className='pb-0'>Total</p>
                            </div>
                        </div>

                        {filteredItem.map((item) => {
                            return <div className='row d-flex align-items-center'>
                                <div className='col-6 d-flex ps-5 pb-3 pt-3'>
                                    <img src={item.image} className='image-fluid rounded-3 w-25' alt="..."/>
                                    <div className='d-flex justify-content-center flex-column ps-5'>
                                        <p className='mb-0'>{item.mealName}</p>
                                        <p className='mb-0'>{item.description}</p>
                                    </div>
                                </div>
                                <div className='col-2'>
                                    <p><CartItemAddRemoveBtn item={item}/></p>
                                </div>
                                <div className='col-2'>
                                    <p>₹ {(item.price).toFixed(2)}</p>
                                </div>
                                <div className='col-2'>
                                    <p>₹ {(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                        })}
                    </div>

                    <div className='col-md-3 border rounded-3 p-3 summary-section'>
                        <h6>Cart Summary</h6>
                        <hr/>
                        <div className='d-flex justify-content-between'>
                            <p>Name </p>
                            <p>Total</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Your Total</p>
                            <p>₹ {cartCtx.totalAmount}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Gov Tax</p>
                            <p>₹ 50.53</p>
                        </div>
                        <hr/>
                        <div className='d-flex justify-content-between'>
                            <p>Total</p>
                            <p>₹ {(cartCtx.totalAmount + 50.53).toFixed(2)}</p>
                        </div>
                        <div className='d-grid'>
                            <Button className='btn btn-primary mb-2'>Check out</Button>
                            <Button onClick={props.onClick} className='btn btn-primary'>Continue Shopping</Button>
                        </div>
                    </div>
                </div>
            </div>}
    </>)
}

export default Cart
