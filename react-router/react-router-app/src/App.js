import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./Components/HomePage";
import ProductPage from "./Components/ProductPage";
import ProductDetails from "./Components/ProductDetails";
import { Root } from "./Components/Root";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Root />,
			children: [
				{ path: "/", element: <HomePage /> },
				{ path: "/products", element: <ProductPage /> },
				{ path: "/products/:id", element: <ProductDetails /> },
			],
		},
	]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
