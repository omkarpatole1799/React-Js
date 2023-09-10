import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UIActions } from './Components/Store/UI-slice';

import Cart from './Components/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';
import ItemList from './Components/ItemList/ItemList';
import Notification from './Components/UI/Notification/Notification';

let isInitial = true

function App() {
  const dispatch = useDispatch()
  const showCart = useSelector(state => state.cartUI.displayCart)
  const cartData = useSelector(state => state.cartItems)
  const notification = useSelector(state => state.cartUI.notification)
  useEffect(() => {

    if (isInitial) {
      isInitial = false
      return
    }
    
    const timer = setTimeout(() => {
      const fetchData = async () => {
        dispatch(UIActions.showNotification({
          status: 'sending',
          message: 'Sending',
          description: 'sending sent data to server'
        }))

        const response = await fetch('https://cart-data-8caf2-default-rtdb.firebaseio.com/cart-data.json', {
          method: "PUT",
          body: JSON.stringify(cartData)
        })

        if (!response.ok) {
          throw new Error('something went wrong')
        }

        dispatch(UIActions.showNotification({
          status: 'success',
          message: 'Success',
          description: 'Successfully sent cart data to server',
        }))
      }
      fetchData().catch(() => {
        dispatch(UIActions.showNotification({
          status: 'error',
          message: 'Error',
          description: 'Error sending cart data to server'
        }))
      })
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [cartData, dispatch])

  return (
    <>
      {notification && !isInitial && <Notification data={{
        status: notification.status,
        message: notification.message,
        description: notification.description,
      }} />}
      <Navbar></Navbar>
      {showCart && <Cart />}
      <ItemList></ItemList>
    </>
  );
}

export default App;
