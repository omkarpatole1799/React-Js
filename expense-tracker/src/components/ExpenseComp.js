import React from 'react'
import ExpenseItem from './ExpenseItem'

function ExpenseComp(props) {
    const expenses = props.data
    
    return (
        expenses.map((el)=>{
            return <ExpenseItem title={el.title} date={el.date} amount={el.amount} />
        })
    )
}

export default ExpenseComp