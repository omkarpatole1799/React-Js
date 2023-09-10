import React from 'react'
import { useSelector } from 'react-redux'
import ItemActions from './ItemActions'
import Card from '../UI/Card/Card'
const Cart = () => {
    const cartItems = useSelector(state => state.cartItems.items)

    return (
        <Card className='p-1'>
            {cartItems.length === 0 && <p className=''>Empty Cart</p>}
            {cartItems && cartItems.map((item) => {
                return <Card key={item.itemId} className='bg-blue-100 p-2'>
                    <div className='flex justify-between' key={item.itemId}>
                        <div>
                            <h3 className='text-xl font-bold'>{item.itemName}</h3>
                            <p className='text-md font-semibold'>$ {item.itemPrice} </p>
                        </div>
                        <div>
                            <ItemActions quantity={item.itemQuantity} item={item}></ItemActions>
                        </div>
                    </div>
                </Card>
            })}
        </Card>
    )
}
export default Cart