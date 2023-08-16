import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <>
            <div>
                <button className="btn btn-success">
                    <Link className="nav-link" to="/add-user">Add User</Link>
                </button>
            </div>
        </>
    );
}

export default Dashboard;
