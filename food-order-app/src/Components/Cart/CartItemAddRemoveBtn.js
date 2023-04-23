import React, { useContext, useState } from "react"
import Button from "../UI/Button/Button"
import classes from "./CartItemAddRemoveButton.module.css"
import CartContext from "../../store/cart-context"
import button from "../UI/Button/Button"

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
				<Button
					className="p-1"
					onClick={onAddItemHandler.bind(null, props.item)}
				>
					Add
				</Button>
			)}
			{props.item.quantity > 0 && (
				<div>
					<Button
						onClick={onAddItemHandler.bind(null, props.item)}
						className={`m-1 ${classes.quantityButton}`}
					>
						+
					</Button>

					<span> x {props.item.quantity}</span>
					<Button
						onClick={onRemoveItemHandler.bind(null, props.item.id)}
						className={`m-1 ${classes.quantityButton}`}
					>
						-
					</Button>
				</div>
			)}
		</>
	)
}

export default CartItemAddRemoveBtn
