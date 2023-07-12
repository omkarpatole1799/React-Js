import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Components/Home";
import Root from "./Components/Root";
import About from "./Components/About";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/meals", element: <Meals /> },
        { path: "/cart", element: <Cart /> }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
