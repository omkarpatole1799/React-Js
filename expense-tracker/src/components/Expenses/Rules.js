import React, { useState } from "react";
import "./Rules.css";
function Rules() {
    const [alert, setAlert] = useState(false);

    const closeRulesButtonHandler = () => {
        return setAlert(false);
    };
    const rulesButtonHandler = () => {
        return setAlert(true);
    };
    return (
        <div>
            {alert && (
                <div className="text-white border-4 flex flex-col">
                    <p>1.Rule no 1</p>
                    <p>2.Rule no 2</p>
                    <p>3.Rule no 3</p>
                    <button
                        onClick={closeRulesButtonHandler}
                        className="text-white bg-blue-500 hover:bg-blue-400 text-sm p-3 rounded-2xl "
                    >
                        Close
                    </button>
                </div>
            )}

            {!alert && (
                <button
                    type="button"
                    onClick={rulesButtonHandler}
                    className=" text-white bg-yellow-700 hover:bg-yellow-600 
                            font-medium rounded-2xl text-sm p-3"
                >
                    Rules
                </button>
            )}
        </div>
    );
}

export default Rules;
