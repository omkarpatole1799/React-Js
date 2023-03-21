import React, { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import "./ExpenseComp.css";
import Chart from "../Chart/Chart";
import Rules from "./Rules";
function ExpenseComp(props) {
    const [selectedYear, setSelectedYear] = useState("2021");

    const expenses = props.data;
    const filterSelectedYearHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    };

    const filterData = expenses.filter((exp) => {
        return (
            exp.date.toLocaleString("en-US", { year: "numeric" }) ===
            selectedYear
        );
    });

    return (
        <div className="expense_component">
            <Rules />
            <ExpenseFilter
                selectedYear={selectedYear}
                onSelectedYear={filterSelectedYearHandler}
            />
            <Chart item={filterData} />
            <ExpensesList item={filterData} />
        </div>
    );
}

export default ExpenseComp;
