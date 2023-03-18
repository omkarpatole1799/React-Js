import React,{useState} from 'react'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter'
function ExpenseComp(props) {

    const [selectedYear, setSelectedYear] = useState('2021')

    const expenses = props.data

    const filterSelectedYearHandler =(selectedYear)=>{
        setSelectedYear(selectedYear)
    }
    return (
        <div>
            <ExpenseFilter selectedYear={selectedYear} onSelectedYear={filterSelectedYearHandler}/>
            {expenses.map((el) => {
                return <ExpenseItem title={el.title} date={el.date} amount={el.amount} />
            })}
        </div>
    )
}

export default ExpenseComp