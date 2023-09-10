import { useDispatch } from "react-redux";
import { cartItemAction } from "../Store/cart-items-slice";
import { Button } from "../UI/Button/Button";
const ItemActions = (props) => {

    const dispatch = useDispatch()

    const addItemhandler = (item) => {
        dispatch(cartItemAction.addItem(item))
    }
    const removeItemHandler = (item) => {
        dispatch(cartItemAction.removeItem(item))
    }

    return <>
        <Button onClick={addItemhandler.bind(null, props.item)}>+</Button>
        <span>x {props.quantity}</span>
        <Button onClick={removeItemHandler.bind(null, props.item)}>-</Button>
    </>
}
export default ItemActions