import React, { useContext, useEffect, useState } from "react"
import MealsList from "./MealsList"
import cartContext from "../../store/cart-context"
import useHttp from "../../store/use-http"
import Loading from "../UI/Loading"

function Meals() {
	const cartCtx = useContext(cartContext)
	const [mealsData, setMealsData] = useState([])

	const { fetchData, error, loading } = useHttp()

	useEffect(() => {
		const transformData = (data) => {
			let mealData = []
			for (const key in data) {
				mealData.push({
					id: key,
					mealName: data[key].mealName,
					description: data[key].description,
					image: data[key].image,
					price: data[key].price,
					quantity: data[key].quantity
				})
			}
			setMealsData(mealData)
		}
		fetchData('https://meals-io-2bdf2-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json', transformData)
	}, [])

	const classNames = `bg-[#EBEAEF] ms-0.5 me-0.5 p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5`

	return (
		<>
			<div className={classNames}>
				{error && <p>{error}</p>}
				{!error && loading && <Loading />}
				{!error && !loading && <MealsList meals={mealsData} />}
			</div>
		</>
	)
}

export default Meals
