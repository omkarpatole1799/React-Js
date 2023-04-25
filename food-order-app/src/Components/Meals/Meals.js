import React, { useContext } from "react"
import MealsList from "./MealsList"
import cartContext from "../../store/cart-context"

function Meals() {
	const cartCtx = useContext(cartContext)

	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
				<MealsList meals={cartCtx.items} />
			</div>
		</>
	)
}

export default Meals
