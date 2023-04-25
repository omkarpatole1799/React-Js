import React, { useContext } from "react"
import Button from "../UI/Button/Button"
import classes from "./CartItemAddRemoveButton.module.css"
import CartContext from "../../store/cart-context"

function CartItemAddRemoveBtn(props) {
	const cartCtx = useContext(CartContext)

	const onAddItemHandler = (item) => {
		cartCtx.addItem({ ...item, quantity: 1 })
	}
	const onRemoveItemHandler = (id) => {
		cartCtx.removeItem(id)
	}

	return (
		<>
			{props.item.quantity === 0 && (
				<div className="flex justify-end">
					<Button
						onClick={onAddItemHandler.bind(null, props.item)}
						className="rounded-md bg-[#111827] text-[#D1D7DC] p-1 md:p-0.5 text-sm lg:text-lg lg:p-1"
					>
						<i class="fa-sharp fa-solid fa-cart-plus"></i>
					</Button>
				</div>
			)}
			{props.item.quantity > 0 && (
				<div>
					<Button
						onClick={onRemoveItemHandler.bind(null, props.item.id)}
						className="border-2 h-9 px-3 rounded-md bg-[#111827] text-[#D1D7DC] md:px-2 md:text-sm"
					>
						<i className="fa-solid fa-minus"></i>
					</Button>

					<span> x {props.item.quantity}</span>
					<Button
						onClick={onAddItemHandler.bind(null, props.item)}
						className="h-9 bg-[#111827] text-[#D1D7DC] md:px-2 md:text-sm"
					>
						<i className="fa-solid fa-plus"></i>
					</Button>
				</div>
			)}
		</>
	)
}

export default CartItemAddRemoveBtn
