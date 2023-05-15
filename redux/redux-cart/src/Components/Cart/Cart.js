import React from 'react'
import ItemActions from './ItemActions'
import { useSelector } from 'react-redux'

const Cart = () => {
    console.log("hi")
    const cartItems = useSelector(state => state.cartItems.items)



    return <>
        <div className='border-2 flex flex-col justify-center items-center p-3 m-3'>
            {cartItems.map((item) => {
                return <>
                    <h3 className='text-2xl font-semibold'>{item.itemName}</h3>
                    <p className='text-2xl font-semibold'>$ {item.itemPrice} </p>
                    <div>
                        <ItemActions quantity={item.itemQuantity}></ItemActions>
                    </div>
                </>
            })}
        </div>
    </>
}
export default Cart