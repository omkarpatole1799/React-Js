import React from "react"
import CartItemAddRemoveBtn from "../Cart/CartItemAddRemoveBtn"
import "./MealsList.css"
function MealsList(props) {

	return (
		<>
			{props.meals.map((item) => {
				return (
					<div
						key={item.id}
						className="bg-[#F8FAFC] m-2 sm:m-2 md:m-2 lg:m-5 rounded-3xl drop-shadow-2xl  md:hover:border-0 md:hover:drop-shadow-2xl md:hover:bg-[#111827] md:hover:text-[#D1D7DC] duration-500"
					>
						<div className="">
							<img
								src={item.image}
								className="rounded-t-3xl object-cover object-center h-60 w-96 lg:h-54 lg:w-96"
								alt=""
								loading="lazy"
							/>
						</div>
						<div className="pt-5 ps-3 pe-3 pb-1 ">
							<div className="flex justify-center items-center pb-2 ps-4 pe-6">
								<h2 className="text-md md:text-lg lg:text-2xl font-semibold">
									{item.mealName}
								</h2>
							</div>
							<hr />
							<div className="flex justify-around text-xs md:text-xs lg:text-sm md:ps-1 md:pe-1 pb-3 pt-3 ps-1 pe-1">
								<span>60 calories</span>
								<p className="">
									<i className="fa-solid fa-circle fa-2xs"></i>
								</p>
								<span>4 person</span>
							</div>
							<hr />
							<div className="flex justify-between items-center h-10 pt-2 ps-2 pe-2 pb-1 sm:pb-3 sm:pt-3 sm:ps-3.5 sm:pe-3.5 ">
								<div className="text-sm md:text-sm lg:text-2xl font-semibold">
									₹
									{item.quantity > 0
										? `${(item.price * item.quantity).toFixed(2)}`
										: `${item.price.toFixed(2)}`}
								</div>
								<div className="">
									<CartItemAddRemoveBtn item={item} />
								</div>
							</div>
						</div>
					</div>
				)
			})}
		</>
	)
}

export default MealsList
