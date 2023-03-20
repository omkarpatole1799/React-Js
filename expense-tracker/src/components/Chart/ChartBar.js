import React from "react";
import "./ChartBar.css";
function ChartBar(props) {
    return (
        <>
            <div className="chart-bar__label">{props.month}</div>
            <div className="chart-bar">
                {/* <div className="bar__container"> */}
                <div className="chart-bar__inner">
                    <div
                        className="chart-bar__fill"
                        style={{ height: props.value + "%" }}
                    ></div>
                </div>
                {/* </div> */}
            </div>
        </>
    );
}

export default ChartBar;
