import React from 'react'
import { useSelector } from 'react-redux'
import ItemActions from './ItemActions'

const Cart = () => {
    const cartItems = useSelector(state => state.cartItems.items)

    return (
        <>
            <div className='border-2 flex flex-col justify-center items-center p-3 m-3'>
                {cartItems.map((item) => {
                    return <div key={item.itemId}>
                        <h3 className='text-2xl font-semibold'>{item.itemName}</h3>
                        <p className='text-2xl font-semibold'>$ {item.itemPrice} </p>
                        <ItemActions quantity={item.itemQuantity} item={item}></ItemActions>
                    </div>
                })}
            </div>
        </>
    )
}
export default Cart