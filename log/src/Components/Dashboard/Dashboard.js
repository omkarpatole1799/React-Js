// dashboard css import
import "./dashboard.css";

// components import
import Navbar from "../Navbar/Navbar";

function Dashboard(props) {
    return (
        <>
            <div className="row">
                <Navbar></Navbar>
                <div className="col-9 dashboardContent">
                    <h3>Hello user!</h3>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
