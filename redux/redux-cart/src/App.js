import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./Components/Cart/Cart";
import Navbar from "./Components/Navbar/Navbar";
import ItemList from "./Components/ItemList/ItemList";
import Notification from "./Components/UI/Notification/Notification";
import { fetchData, sendData } from "./Components/Store/cartData";

let isInitial = true;

function App() {
	const dispatch = useDispatch();
	const showCart = useSelector((state) => state.cartUI.displayCart);
	const cartData = useSelector((state) => state.cartItems);
	const notification = useSelector((state) => state.cartUI.notification);

	useEffect(() => {
		dispatch(fetchData(cartData));
	}, [dispatch]);

	useEffect(() => {
		if (isInitial) {
			isInitial = false;
			return;
		}

		dispatch(sendData(cartData));
	}, [cartData, dispatch]);

	return (
		<>
			{notification && (
				<Notification
					data={{
						status: notification.status,
						message: notification.message,
						description: notification.description,
					}}
				/>
			)}

			<Navbar></Navbar>

			{showCart && <Cart />}

			<ItemList></ItemList>
		</>
	);
}

export default App;
