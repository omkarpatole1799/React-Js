import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import './ExpenseComp.css'
function ExpenseComp(props) {

    const [selectedYear, setSelectedYear] = useState('2021')

    const expenses = props.data
    const filterSelectedYearHandler = (selectedYear) => {
        setSelectedYear(selectedYear)
    }

    const filterData = expenses.filter((exp) => {
        return exp.date.toLocaleString('en-US', { year: 'numeric' }) === selectedYear
    })

    return (
        <div className='expense_component__container'>
            <ExpenseFilter selectedYear={selectedYear} onSelectedYear={filterSelectedYearHandler} />
            <ExpensesList item={filterData} />
        </div>
    )
}

export default ExpenseComp