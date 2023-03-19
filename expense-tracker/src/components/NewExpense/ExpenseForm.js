import React, { useState } from 'react'


import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const titleInputHandler = (e) => {
        setDescription(e.target.value)
    }
    const amountInputHandler = (e) => {
        setAmount(Number(e.target.value))
    }
    const dateInputHandler = (e) => {
        setDate(e.target.value)
    }
    const formSubmitHandler = (e) => {
        e.preventDefault()

        const expenses = {
            title: description,
            amount: amount,
            date: new Date(date)
        }

        setDate('')
        setAmount('')
        setDescription('')

        props.onAddExpense(expenses)
    }


    return (
        <div className="expense_form__container">
            <form className='expense_form' onSubmit={formSubmitHandler} >
                <div className="expense_form__item">
                    <label className="expense_form__label">Title</label>
                    <input onChange={titleInputHandler} className="expense_form__input" type='text' value={description} />
                </div>

                <div className="expense_form__item">
                    <label className="expense_form__label">Amount</label>
                    <input onChange={amountInputHandler} className="expense_form__input" type='number' value={amount} min='0.01' step='0.01' />
                </div>

                <div className="expense_form__item">
                    <label className="expense_form__label">Date</label>
                    <input onChange={dateInputHandler} className="expense_form__input" type='date' value={date} min='2020-01-01' max='2023-12-12' />
                </div>

                <div className='expense_form__item'>
                    <button className="expense_form__input btn_submit" type='submit'>Submit</button>
                    <button className="expense_form__input btn_cancel" onClick={props.onCancel} type='button'>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm