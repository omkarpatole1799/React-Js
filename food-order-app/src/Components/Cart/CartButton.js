import React, { useContext, useEffect, useState } from "react"
import Button from "../UI/Button/Button"
import CartContext from "../../store/cart-context"
import './CartButton.css'
function CartButton(props) {
	const cartCxt = useContext(CartContext)
	const [ cartButtonAnimation, setCartButtonAnimation ] = useState(false)
	
	const totalCartItem = cartCxt.items.reduce((cur, item) => {
		return cur + item.quantity
	}, 0)

	useEffect(() => {
		setCartButtonAnimation(true)
		const buttonAnimationTimer = setTimeout(() => {
			setCartButtonAnimation(false)
		}, 300)

		return () => {
			clearTimeout(buttonAnimationTimer)
		}
	},[totalCartItem])

	const cartButtonClasses = `${
		cartButtonAnimation ? "bump" : ""
	} rounded-md bg-[#111827] text-[#D1D7DC] hover:bg-[#FFFFFF] hover:text-[#111827] rounded-2xl drop-shadow-2xl hover:drop-shadow-3xl ps-2 pe-2 md:p-0.5 text-sm lg:text-lg lg:p-1`

	return (
		<Button className={cartButtonClasses} onClick={props.onClick}>
			<span className="pe-1">
				<i className="fa-solid fa-cart-arrow-down"></i>
			</span>
			<span className="ps-1 pe-2">Cart</span>
			{totalCartItem ? (
				<span className="bg-[#D1D7DC] rounded-2xl text-[#111827] ps-1 pe-1">
					{totalCartItem}
				</span>
			) : (
				""
			)}
		</Button>
	)
}

export default CartButton
