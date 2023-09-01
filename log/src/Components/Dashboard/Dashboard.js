// dashboard css import
import { useLocation } from "react-router-dom";
import "./dashboard.css";

function Dashboard(props) {
    const {
        state: { userId },
    } = useLocation();
    console.log(userId);
    return (
        <>
            <div className="">
                <div className="col-9 dashboardContent">
                    <h3>Hello user! {userId}</h3>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
