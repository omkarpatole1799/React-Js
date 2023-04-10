import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const expenseHandler = (expenses) => {
    const expense = {
      ...expenses,
      id: Math.random().toString(),
    };
    props.onAllExpenseData(expense);
  };

  const editFormHandler = () => {
    setIsEditing(true);
  };

  const cancelEditFormHandler = () => {
    setIsEditing(false);
  };

  // method 1 //
  // if (isEditing === false) {
  //     return <div className='new_expenses__container'>
  //         <button className='add_expense_btn' onClick={editFormHandler}> Add Expenses </button>
  //     </div>
  // }

  // return (
  //     <div className='new_expenses__container'>

  //         <ExpenseForm onAddExpense={expenseHandler} onCancel={cancelEditFormHandler}/>

  //     </div>
  // )

  // method 2 //

  return (
    <div className="new_expenses__container">
      {!isEditing && (
        <button className="add_expense_btn" onClick={editFormHandler}>
          Add Expenses
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onAddExpense={expenseHandler}
          onCancel={cancelEditFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
