import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
    return (
        <li className='expense_item__list'>
            <div className="expense_item__container">

                <ExpenseDate date={props.date} />

                <div className='expense_item__title'>
                    <h2>{props.title}</h2>
                </div>

                <div className='expense_item__amount'>
                    $ {props.amount}
                </div>
                
            </div>
        </li>

    )
}

export default ExpenseItem