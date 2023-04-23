import React from 'react'
import './CartUI.css'

function CartUI() {
    return <>

        <div className='row m-5'>
            <div className='col-md-9 border'>
                <h5>Shopping Cart</h5>
                <hr/>
                <table className='table'>
                    <tr>
                        <th>PRODUCT DETAILS</th>
                        <th>QUANTITY</th>
                        <th>PRICE</th>
                        <th>TOTAL</th>
                    </tr>
                    <tr>
                        <td>Puran Poli</td>
                        <td>x 5</td>
                        <td> $ 44</td>
                        <td> $ 100</td>
                    </tr>
                    <tr>
                        <td>Puran Poli</td>
                        <td>x 5</td>
                        <td> $ 44</td>
                        <td> $ 100</td>
                    </tr>
                </table>
                <button className='btn btn-link text-decoration-none'>Continue Shopping</button>
            </div>
            <div className='col-md-3 summary-section'>
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

    </>
}

export default CartUI