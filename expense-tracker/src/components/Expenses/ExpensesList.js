import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
function ExpensesList(props) {
    if (props.item.length === 0) {
        return <h2 className="expense_list__notFound">No data found</h2>;
    }

    return (
        <ul>
            {props.item.map((el) => {
                return (
                    <ExpenseItem
                        key={el.id}
                        title={el.title}
                        date={el.date}
                        amount={el.amount}
                    />
                );
            })}
        </ul>
    );
}
export default ExpensesList;
