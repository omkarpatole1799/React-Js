import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {

    const [id, setId] = useState(0)
    const expenseHandler = expenses => {
        const expense = {
            ...expenses,
            id: Math.random().toString()
        }
        props.onAllExpenseData(expense)
    }
    return (
        <div>
            <ExpenseForm onAddExpense={expenseHandler} />
        </div>
    )
}

export default NewExpense