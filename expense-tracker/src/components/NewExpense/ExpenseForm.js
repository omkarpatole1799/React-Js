import React, { useState } from 'react'
import ExpenseComp from '../Expenses/ExpenseComp'
import './ExpenseForm.css'
const ExpenseForm = (props) => {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const titleInputHandler = (e) => {
        setTitle(e.target.value)
        console.log(e.target.value);
    }
    const amountInputHandler = (e) => {
        setAmount(e.target.value)
    }
    const dateInputHandler = (e) => {
        setDate(e.target.value)
    }
    const formSubmitHandler = (e)=>{
        e.preventDefault()

        const expenses = {
            title: title,
            amount: amount,
            date: new Date(date)
        }

        setDate('')
        setAmount('')
        setTitle('')

        props.onAddExpense(expenses)

    }

    return (
        <div>
            <form className="expense_form" onSubmit={formSubmitHandler} >
                <div className="expense_form__title">
                    <label className="expense_form__label">Title</label>
                    <input onChange={titleInputHandler} className="expense_form__input" type='text' value={title} />
                </div>

                <div className="expense_form__amount">
                    <label className="expense_form__label">Amount</label>
                    <input onChange={amountInputHandler} className="expense_form__input" type='number' value={amount} min='0.01' step='0.01' />
                </div>

                <div className="expense_form__date">
                    <label className="expense_form__label">Date</label>
                    <input onChange={dateInputHandler} className="expense_form__input" type='date' value={date} min='2020-01-01' max='2023-12-12' />
                </div>

                <div className='expense_form__button'>
                    <button className="expense_form__input btn_submit" type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm