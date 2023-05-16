import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Cart from './Components/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';
import ItemList from './Components/ItemList/ItemList';

function App() {
  const showCart = useSelector(state => state.cartUI.displayCart)
  const cartData = useSelector(state => state.cartItems)
  
  // PUT cart-data to backend
  useEffect(() => {
    const fetchCartDataTimer = setTimeout(() => {
      fetch('https://cart-data-8caf2-default-rtdb.firebaseio.com/cart-data.json', {
        method: "PUT",
        body: JSON.stringify(cartData)
      })
    }, 2000 )

    // cleanup function
    return () => {
      clearTimeout(fetchCartDataTimer)
    }
  },[cartData])

  return (
    <>
      <Navbar></Navbar>
      {showCart && <Cart />}
      <ItemList></ItemList>
    </>
  );
}

export default App;
