import { useDispatch } from 'react-redux'
import { cartItemAction } from '../Store/cart-items-slice'
import { Button } from '../UI/Button'
const ItemActions = (props) => {
    const dispatch = useDispatch()
    const addItemHandler = (item) => {
        dispatch(cartItemAction.addItem(item))
    }
    const removeItemHandler = (item) => {
        dispatch(cartItemAction.removeItem(item))
    }

    return <>
        <div className=''>
            <Button onClick={addItemHandler.bind(null, props.item)} className='font-bold text-3xl'>+</Button>
            <Button className='font-bold text-3xl'>x {props.quantity}</Button>
            <Button onClick={removeItemHandler.bind(null, props.item)} className='font-bold text-3xl'>-</Button>
        </div>
    </>
}
export default ItemActions