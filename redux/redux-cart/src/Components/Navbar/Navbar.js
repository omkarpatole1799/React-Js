import { useDispatch } from 'react-redux'
import { cartActions } from '../Store/cartUI-slice'
import { Button } from '../UI/Button'
const Navbar = () => {

    const dispatch = useDispatch()

    const toggleCartHandler = () => {
        dispatch(cartActions.toggleCart())
    }
    return <>
        <div className='bg-purple-500 flex justify-between '>
            <h2 className='font-semibold text-2xl text-white p-3'>reduxcart.io</h2>
            <Button onClick={toggleCartHandler} className='text-2xl'>Cart</Button>
        </div>
    </>
}
export default Navbar