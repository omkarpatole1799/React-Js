// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { UIActions } from './Components/Store/UI-slice';


// import Cart from './Components/Cart/Cart';
// import Navbar from './Components/Navbar/Navbar';
// import ItemList from './Components/ItemList/ItemList';
// import Notification from './Components/UI/Notification/Notificati on';

// let initial = true

// function App() {
//   const dispatch = useDispatch()

//   const showCart = useSelector(state => state.cartUI.displayCart)
//   const cartData = useSelector(state => state.cartItems)
//   const notification = useSelector(state => state.cartUI.notification)

//   // PUT cart-data to backend
//   useEffect(() => {
//     const fetchData = async () => {
//       dispatch(UIActions.showNotification({
//         status: 'sending',
//         message: 'sending sent the data',
//         description: 'sending sent data to server'
//       }))
//       try {
//         const response = await fetch('https://cart-data-8caf2-default-rtdb.firebaseio.com/cart-data.json', {
//           method: "PUT",
//           body: JSON.stringify(cartData)
//         })
//         if (!response.ok) {
//           throw new Error('something went wrong')
//         }
//         const resData = response.json()
//         dispatch(UIActions.showNotification({
//           status: 'success',
//           message: 'Successfully sent data',
//           description: 'Successfully sent cart data to server',
//         }))
//       } catch (error) {
//         dispatch(UIActions.showNotification({
//           status: 'error',
//           message: 'Error sending data',
//           description: 'Error sending cart data to server'
//         }))
//       }
//     }
//     if (initial) {
//       initial = false
//       return
//     }

//     fetchData()
//   }, [cartData,dispatch])

//   return (
//     <>
//       {notification && <Notification data={{
//         status: notification.status,
//         message: notification.message,
//         description: notification.description,
//       }} />}
//       <Navbar></Navbar>
//       {showCart && <Cart />}
//       <ItemList></ItemList>
//     </>
//   );
// }

// export default App;
