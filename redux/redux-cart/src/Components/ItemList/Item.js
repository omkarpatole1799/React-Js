import { useDispatch } from 'react-redux'
import { cartItemAction } from '../Store/cart-items-slice'
import { Button } from '../UI/Button/Button'
import Card from "../UI/Card/Card"

const Item = (props) => {
    const dispatch = useDispatch()
    const addItemHandler = (item) => {
        dispatch(cartItemAction.addItem(item))
    }
    return <>
        <Card>
            <li>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <span>{props.item.itemName}</span>
                        <span>price $ {props.item.itemPrice}</span>
                    </div>
                    <Button onClick={addItemHandler.bind(null, props.item)}>Add to Cart</Button>
                </div>
            </li>
        </Card>
    </>
}
export default Item