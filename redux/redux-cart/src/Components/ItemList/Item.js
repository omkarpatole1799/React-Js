import { useDispatch } from 'react-redux'
import { cartItemAction } from '../Store/cart-items-slice'
import { Button } from '../UI/Button'

const Item = (props) => {
    const dispatch = useDispatch()
    const addItemHandler = (item) => {
        dispatch(cartItemAction.addItem(item))
    }
    return <>
        <li className='rounded-2xl p-4 m-2 bg-blue-300'>
            <span>{props.item.itemName}</span>
            <span>price $ {props.item.itemPrice}</span>
            <Button onClick={addItemHandler.bind(null, props.item)}>Add to Cart</Button>
        </li>
    </>
}
export default Item