import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Components/Home";
import Root from "./Components/Root";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CheckoutForm from "./Components/Cart/CheckoutForm";
import OrderPlaced from "./Components/Cart/OrderPlaced";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/meals", element: <Meals /> },
        { path: "/cart", element: <Cart /> },
        { path: "/checkout", element: <CheckoutForm/>},
        { path: "/order-placed", element: <OrderPlaced/>}
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
