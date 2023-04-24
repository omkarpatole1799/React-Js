import React from "react"
import CartItemAddRemoveBtn from "../Cart/CartItemAddRemoveBtn"

function MealsList(props) {
	return (
		<>
			{props.meals.map((item) => {
				return (
					<div key={item.id} className="card m-2 " style={{ width: "13rem" }}>
						<img src={item.image} className="mt-2" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{item.mealName}</h5>
							<div className="card-text">
								<div>{item.description}</div>
								<div>₹ {item.price}</div>
								<CartItemAddRemoveBtn item={item} />
							</div>
						</div>
					</div>
				)
			})}
		</>
	)
}

export default MealsList
