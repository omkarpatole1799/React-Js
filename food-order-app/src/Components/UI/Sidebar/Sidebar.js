import React from 'react'
import './Sidebar.css'
import CartItemAddRemoveBtn from "../../Cart/CartItemAddRemoveBtn";

function Sidebar (props){
    return <>
        <div className='row cart-modal'>
            <div className='col-md-8'>
                <h5>Shopping Cart</h5>
                <hr/>
                <table className='table'>
                    <tr>
                        <th>PRODUCT DETAILS</th>
                        <th>QUANTITY</th>
                        <th>PRICE</th>
                        <th>TOTAL</th>
                    </tr>

                </table>
                <button className='btn btn-link text-decoration-none'>Continue Shopping</button>
            </div>

            <div className='col-md-4'>
                <h5>Order Summary</h5>
                <hr/>
                <div>
                    <span>ITEMS 3</span>
                    <span>$ 400.00</span>
                </div>
                <div>
                    <span>Gov. Taxes </span>
                    <span>$ 50.86</span>
                </div>
                <div>
                    <input type='radio'/>
                    <label htmlFor="radioIagree">I agree</label>
                </div>
                <hr/>
                <div>
                    <span>Total</span>
                    <span>$ 450.86</span>
                </div>
                <button className='btn btn-primary'>Checkout</button>
            </div>
        </div>
            <button onClick={props.onClick}>Close</button>
    </>
}
export default Sidebar