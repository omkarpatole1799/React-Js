import { Link } from "react-router-dom";

// component imports
import Button from "./UI/Button";

function Dashboard() {
    return (
        <div className="container mt-5">
            <h3 className="text-center">Dashboard, welcome "usernamehere"</h3>
            <div className="d-flex ">
                <Button className="btn btn-success m-5">
                    <Link className="nav-link" to="/add-user">
                        Add User
                    </Link>
                </Button>

                <Button className="btn btn-primary m-5">
                    <Link className="nav-link" to="/add-log">
                        Add Log
                    </Link>
                </Button>
            </div>
        </div>
    );
}

export default Dashboard;
