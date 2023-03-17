import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
    // console.log(props);
    return (
        <div className="expense_item">

            <ExpenseDate date={props.date} />

            <div className='expense_item__title'>
                <h2>{props.title}</h2>
            </div>
            <div className='expense_item__amount'>{props.amount}</div>
        </div>
    )
}

export default ExpenseItem