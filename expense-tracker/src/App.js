import React, { useState } from "react";
import ExpenseComp from "./components/Expenses/ExpenseComp";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
    {
        id: "e1",
        title: "Food",
        date: new Date(2023, 4, 23),
        amount: 44,
    },
    {
        id: "e2",
        title: "Grocerry",
        date: new Date(2021, 2, 23),
        amount: 90,
    },
    {
        id: "e3",
        title: "Pizza",
        date: new Date(2021, 8, 23),
        amount: 14,
    },
    {
        id: "e4",
        title: "Books",
        date: new Date(2023, 6, 23),
        amount: 60,
    },
    {
        id: "e5",
        title: "Fuel",
        date: new Date(2023, 0, 23),
        amount: 37,
    },
    {
        id: "e5",
        title: "Rent",
        date: new Date(2021, 0, 23),
        amount: 47,
    },
    {
        id: "e6",
        title: "Loan",
        date: new Date(2023, 11, 3),
        amount: 97,
    },
];

function App() {
    const [expenses, setExpenses] = useState(DUMMY_DATA);

    const allExpenseDataHandler = (expensesAll) => {
        setExpenses((prevExpense) => {
            return [expensesAll, ...prevExpense];
        });
    };

    return (
        <>
            <NewExpense onAllExpenseData={allExpenseDataHandler} />

            <ExpenseComp data={expenses} />
        </>
    );
}

export default App;
