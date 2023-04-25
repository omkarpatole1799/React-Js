import React, { useReducer } from "react"
import CartContext from "./cart-context"

// =========
import tomato from "../assets/images/tomato.jpg"
import chilli from "../assets/images/chilli.jpg"
import pizza from '../assets/images/pizza.jpg'
import sandwich from '../assets/images/sandwich.jpg'
import burger from '../assets/images/burger.jpg'
import frenchFries from '../assets/images/french-fries.jpg'
import noodles from '../assets/images/noodles.jpg'

const DUMMY_MEALS = [
	{
		id: "m1",
		mealName: "Tomato",
		description: "Special fry",
		price: 20,
		image: tomato,
		quantity: 0,
	},
	{
		id: "m2",
		mealName: "Pizza",
		description: "Chees Mix",
		price: 320,
		image: pizza,
		quantity: 0,
	},
	{
		id: "m3",
		mealName: "Chilli fry",
		description: "All veggies mix",
		price: 89.55,
		image: chilli,
		quantity: 0,
	},
	{
		id: "m4",
		mealName: "Sandwich",
		description: "Chess Burst",
		price: 55.99,
		image: sandwich,
		quantity: 0,
	},
	{
		id: "m5",
		mealName: "French Fries",
		description: "Roasted",
		price: 29.89,
		image: frenchFries,
		quantity: 0,
	},
	{
		id: "m6",
		mealName: "Burger",
		description: "Chess Burst",
		price: 35.99,
		image: burger,
		quantity: 0,
	},
	{
		id: "m7",
		mealName: "Noodles",
		description: "Chess Burst",
		price: 55.99,
		image: noodles,
		quantity: 0,
	},
]
// =======

const defaultCartState = {
	items: DUMMY_MEALS,
	totalAmount: 0,
}
const cartReducer = (state, action) => {
	if (action.type === "ADD_ITEM") {
		const exsistingItemIndex = state.items.findIndex((item) => {
			return item.id === action.item.id
		})
		const exsistingCartItem = state.items[exsistingItemIndex]
		let cartItems = []
		if (exsistingCartItem) {
			const updatedItem = {
				...exsistingCartItem,
				quantity: exsistingCartItem.quantity + 1,
			}
			cartItems = [...state.items]
			cartItems[exsistingItemIndex] = updatedItem
		} else {
			cartItems = state.items.concat(action.item)
		}
		const totalAmount = cartItems
			.map((item) => {
				return item.quantity * item.price
			})
			.reduce((cur, el) => {
				return cur + el
			}, 0)
		return {
			items: cartItems,
			totalAmount: totalAmount,
		}
	}
	if (action.type === "REMOVE_ITEM") {
		const removedItemIndex = state.items.findIndex((item) => {
			return item.id === action.id
		})

		const removedItem = state.items[removedItemIndex]
		let updatedItems = []

		if (removedItem.quantity === 1) {
			const updatedItem = { ...removedItem, quantity: 0 }
			updatedItems = [...state.items]
			updatedItems[removedItemIndex] = updatedItem
		} else {
			const updateItem = { ...removedItem, quantity: removedItem.quantity - 1 }
			updatedItems = [...state.items]
			updatedItems[removedItemIndex] = updateItem
		}

		const totalAmount = updatedItems
			.map((item) => {
				return item.quantity * item.price
			})
			.reduce((cur, itemPrice) => {
				return cur + itemPrice
			}, 0)

		return {
			items: updatedItems,
			totalAmount: totalAmount,
		}
	}
	return defaultCartState
}

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	)

	const addItemHandler = (item) => {
		dispatchCartAction({ type: "ADD_ITEM", item: item })
	}
	const removeItemHandler = (id) => {
		dispatchCartAction({ type: "REMOVE_ITEM", id: id })
	}

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemHandler,
		removeItem: removeItemHandler,
	}

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	)
}
export default CartProvider
