import React,{useState} from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
    const [title,setTitle]=useState(props.title)

    const clickHandler = ()=>{
        setTitle('Updated Title!')
        console.log("clicked");
    }

    return (
        <div className="expense_item">

            <ExpenseDate date={props.date} />

            <div className='expense_item__title'>
                <h2>{title}</h2>
            </div>
            <div className='expense_item__amount'>{props.amount}</div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default ExpenseItem