import { NavLink } from "react-router-dom";
import emptyCart from "../../assets/images/empty-cart.png";
import CartItemAddRemoveBtn from "./CartItemAddRemoveBtn";

import { useSelector } from "react-redux";

function Cart() {

    const cartItems = useSelector((state) => state.cartItems);

    const totalAmount = cartItems
        .map((item) => {
            return item.quantity * item.price;
        })
        .reduce((cur, el) => {
            return cur + el;
        }, 0);

    return (
        <>
            <div className="bg-[#EBEAEF] h-[4rem] pt-3 ps-4 flex justify-between items-center">
                <NavLink to="/">
                    <button className="ms-3">
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                </NavLink>
                <div>
                    <h2 className="font-semibold text-xl">Shopping Bag</h2>
                </div>
                <div className="me-3 ">
                    <p className="absolute right-3 z-10 top-[4rem] bg-[#111827] text-[#D1D7DC] rounded-2xl ps-1 pe-1 text-xs">
                        {cartItems.length}
                    </p>
                    <button className=" p-2 rounded-2xl bg-[#F8FAFC] drop-shadow-xl">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
            </div>
            <div className="overflow-y-scroll p-3">
                {cartItems.length === 0 && (
                    <div className="flex flex-col items-center justify-center mt-20">
                        <img className="w-40 h-auto" src={emptyCart} alt="" />
                        <p className="pt-5 text-lg font-semibold">Woops!!! Empty Cart</p>
                        <NavLink to='/meals'>
                            <button className="mt-3 bg-[#111827] text-[#D1D7DC] ps-3 pe-3 pt-2 pb-2 rounded-3xl">
                                Go Shopping
                            </button>
                        </NavLink>
                    </div>
                )}
                {cartItems.length > 0 &&
                    cartItems.map((item) => {
                        return (
                            <div key={item.id}>
                                <div className="bg-[#F8FAFC] rounded-3xl mt-4 flex h-24 pe-4 drop-shadow-xl">
                                    <div className="object-cover object-center w-40 flex justify-center items-center">
                                        <img
                                            className="rounded-2xl w-20 h-20"
                                            src={item.image}
                                            alt=""
                                        />
                                    </div>
                                    <div className="w-full pt-2 ps-2">
                                        <button className="absolute right-4">
                                            <i className="fa-solid fa-xmark"></i>
                                        </button>
                                        <h3 className="font-semibold text-lg">{item.mealName}</h3>
                                        <p className="font-thin text-xs ">
                                            Calories 40 - 4 person
                                        </p>
                                        <div className="flex items-center justify-between ">
                                            <span className="font-semibold text-md">₹ 100</span>
                                            <button className="">
                                                <CartItemAddRemoveBtn item={item} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>

            {cartItems.length > 0 && (
                <div className="absolute bottom-10 w-full pe-4">
                    <div className="flex justify-between p-4">
                        <span className="font-semibold">Subtotal</span>
                        <span className="font-bold text-lg">
                            ₹ {totalAmount.toFixed(2)}
                        </span>
                    </div>
                    <hr />
                    <div className="flex justify-between p-4">
                        <span className="font-semibold">Shipping</span>
                        <span className="font-bold text-lg">₹ 36.33</span>
                    </div>
                    <hr />
                    <div className="flex justify-between p-4">
                        <span className="font-semibold">Bag Total</span>
                        <span className="font-bold text-lg">
                            ({cartItems.length} item ) ₹{totalAmount + 36.33}
                        </span>
                    </div>

                    <div className="flex items-center justify-center mt-2">
                        <button
                            className="bg-[#111827] text-[#D1D7DC] ps-3 pe-3 pt-2 pb-2 rounded-3xl"
                        >
                            Proceed To Checkout
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Cart;
