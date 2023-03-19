import React, { useState } from 'react'
import './ExpenseFilter.css'
function ExpenseFilter(props) {

    const selectedYearHandler = (e) => {
        props.onSelectedYear(e.target.value)
    }

    return (
        <div className='expense_filter__container'>
            <label className='expense_filter__label'>Filter By Year </label>
            <select value={props.selectedYear} className='expense_filter__option' onChange={selectedYearHandler}>
                <option className='expense_filter__option'> 2023</option>
                <option className='expense_filter__option'> 2022</option>
                <option className='expense_filter__option'> 2021</option>
                <option className='expense_filter__option'> 2020</option>
                <option className='expense_filter__option'> 2019</option>
            </select>
        </div>
    )
}

export default ExpenseFilter