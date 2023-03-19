import React, { useState } from 'react';
import ExpenseComp from './components/Expenses/ExpenseComp';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'a',
    date: new Date(2023, 4, 23),
    amount: 44
  },{
    id: 'e2',
    title: 'a',
    date: new Date(2021, 2, 23),
    amount: 44
  },
  {
    id: 'e3',
    title: 'aa',
    date: new Date(2021, 2, 23),
    amount: 44
  }
]

function App() {

  const [expenses, setExpenses] = useState(DUMMY_DATA)


  const allExpenseDataHandler = (expensesAll) => {
    setExpenses((prevExpense) => {
      return [expensesAll, ...prevExpense]
    })
  }

  return (
    <>


      <NewExpense onAllExpenseData={allExpenseDataHandler} />

      <ExpenseComp data={expenses} />

    </>
  );
}

export default App;
