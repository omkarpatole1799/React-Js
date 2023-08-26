// dashboard css import
import "./dashboard.css";

// components import
import Navbar from "../Navbar/Navbar";

function Dashboard(props) {
    return (
        <>
            <div className="row">
                <Navbar></Navbar>
                <div className="col-9 dashboardContent"></div>
            </div>
        </>
    );
}

export default Dashboard;
