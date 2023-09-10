import { Link } from "react-router-dom";

export const PRODUCTS_DATA = [
	{
		id: "p1",
		title: "product 1",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quibusdam ea dolorum! Ex eligendi dolorum facilis dicta voluptates minus! Unde.`,
	},
	{
		id: "p2",
		title: "product 2",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quibusdam ea dolorum! Ex eligendi dolorum facilis dicta voluptates minus! Unde.`,
	},
	{
		id: "p3",
		title: "product 3",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quibusdam ea dolorum! Ex eligendi dolorum facilis dicta voluptates minus! Unde.`,
    },
    {
        id: "p4",
        title: "product 4",
        description: `Lorem ipsum dolor sit amet.`
    }
];
const ProductPage = () => {
	return (
		<>
			<p>Products Page</p>
			{PRODUCTS_DATA.map((product) => {
				return (
					<li key={product.id}>
						<Link to={`/products/${product.id}`}>
							{product.title}
						</Link>
					</li>
				);
			})}
		</>
	);
};
export default ProductPage;
