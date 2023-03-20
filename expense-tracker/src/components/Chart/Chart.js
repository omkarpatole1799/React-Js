import React from "react";
import ChartBar from "./ChartBar";
import "./ChartBar.css";
function Chart(props) {
    const expenses = props.item;
    const dataPoints = [
        { month: "Jan", value: 0 },
        { month: "Feb", value: 0 },
        { month: "Mar", value: 0 },
        { month: "Apr", value: 0 },
        { month: "May", value: 0 },
        { month: "Jun", value: 0 },
        { month: "Jul", value: 0 },
        { month: "Aug", value: 0 },
        { month: "Sep", value: 0 },
        { month: "Oct", value: 0 },
        { month: "Nov", value: 0 },
        { month: "Dec", value: 0 },
    ];

    expenses.forEach((element) => {
        const month = element.date.getMonth();
        return (dataPoints[month].value += element.amount);
    });

    return (
        <div className="chart">
            {dataPoints.map((el) => {
                return (
                    <ChartBar
                        key={el.month}
                        month={el.month}
                        value={el.value}
                    />
                );
            })}
        </div>
    );
}

export default Chart;
