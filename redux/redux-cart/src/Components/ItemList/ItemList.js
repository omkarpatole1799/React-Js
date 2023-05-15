import React from 'react'
import ItemActions from '../Cart/ItemActions'
const DUMMY_DATA = [
    {
        id: 'i1',
        itemName: 'Item1',
        itemPrice: 450
    },
    {
        id: 'i2',
        itemName: 'Item1',
        itemPrice: 350
    }
]

function ItemList() {
    return (
        <>
            {
                DUMMY_DATA.map((item) => {
                    return <div className='rounded-2xl p-4 m-2 bg-blue-300'>
                        <p>{item.itemName}</p>
                        <p>price $ {item.itemPrice}</p>
                        <ItemActions item={item}></ItemActions>
                    </div>
                })
            }
        </>
    )
}

export default ItemList