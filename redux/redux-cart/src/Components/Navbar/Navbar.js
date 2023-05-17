import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { UIActions} from '../Store/UI-slice'
import { Button } from '../UI/Button/Button'
const Navbar = () => {
    const totalCartItems = useSelector(state => state.cartItems.totalCartItems)
    const dispatch = useDispatch()

    const toggleCartHandler = () => {
        dispatch(UIActions.toggleCart())
    }
    return <>
        <div className='bg-purple-500 flex justify-between '>
            <h2 className='font-semibold text-2xl text-white p-3'>reduxcart.io</h2>
            <Button onClick={toggleCartHandler} className='text-2xl'> Cart {totalCartItems} </Button>
        </div>
    </>
}
export default Navbar