import { Link } from "react-router-dom";

function DashboardButton() {
    return (
        <>
            <Link to="/dashboard">
                <button>Dashboard</button>
            </Link>
        </>
    );
}

export default DashboardButton;
