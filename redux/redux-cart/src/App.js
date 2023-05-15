import { useSelector } from 'react-redux';
import Cart from './Components/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';
import ItemList from './Components/ItemList/ItemList';
function App() {
  const showCart = useSelector(state=>state.cartUI.displayCart)
  return (
    <>
      <Navbar></Navbar>
      {showCart && <Cart />}
      <ItemList></ItemList>
    </>
  );
}

export default App;
