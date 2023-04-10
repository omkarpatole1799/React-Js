import React from 'react'
import './ExpenseDate.css'
function ExpenseDate(props) {

    const date = props.date.toLocaleString('en-US', { day: 'numeric' })
    const month = props.date.toLocaleString('en-US', { month: 'long' })
    const year = props.date.toLocaleString('en-US', { year: 'numeric' })


    return (
        <div className='expense_date_box'>
            <div className='expense_date_year'>{year}</div>
            <div className='expense_date_month'>{month}</div>
            <div className='expense_date_day'>{date}</div>
        </div>
    )
}

export default ExpenseDate