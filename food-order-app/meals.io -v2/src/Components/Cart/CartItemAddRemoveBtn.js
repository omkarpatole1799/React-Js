import store from '../../store2/redux-store'
import React from "react"
import Button from "../UI/Button/Button"

// import { useDispatch } from 'react-redux'
// import { cartActions } from "../../store2/redux-store"
function CartItemAddRemoveBtn(props) {
	
	// const dispatch = useDispatch()

	const onAddItemHandler = (item) => {
		store.dispatch({type: 'addItem', value: item})
		// dispatch(cartActions.addItem(item))
	}	

	const onRemoveItemHandler = (id) => {
		store.dispatch({type: 'removeItem', id: id})
		// dispatch(cartActions.removeItem(id))
	}

	return (
		<>
			{props.item.quantity === 0 && (
				<div className="flex justify-end">
					<Button
						onClick={onAddItemHandler.bind(null, props.item)}
						className="rounded-2xl bg-[#111827] text-[#D1D7DC] p-1 md:p-0.5 text-sm lg:text-lg lg:p-1"
					>
						<i className="fa-sharp fa-solid fa-cart-plus"></i>
					</Button>
				</div>
			)}
			{props.item.quantity > 0 && (
				<div>
					<Button
						onClick={onRemoveItemHandler.bind(null, props.item.id)}
						className="rounded-2xl bg-[#111827] text-[#D1D7DC] ps-1 pe-1 md:p-0.5 text-sm lg:text-lg lg:p-1"
					>
						<i className="fa-solid fa-minus"></i>
					</Button>

					<span className="ps-1 pe-1">{props.item.quantity}</span>
					<Button
						onClick={onAddItemHandler.bind(null, props.item)}
						className="rounded-2xl bg-[#111827] text-[#D1D7DC] ps-1 pe-1 md:p-0.5 text-sm lg:text-lg lg:p-1"
					>
						<i className="fa-solid fa-plus"></i>
					</Button>
				</div>
			)}
		</>
	)
}

export default CartItemAddRemoveBtn
