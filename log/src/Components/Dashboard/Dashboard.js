// dashboard css import
import "./dashboard.css";

function Dashboard() {
    const actionButtons = [
        { name: "Add Log" },
        { name: "Dashboard" },
        { name: "Attendance" },
        { name: "Logout" },
    ];

    return (
        <>
            <div className="row">
                <div className="col-2 d-flex justify-content-start align-items-start flex-column sidebar">
                    {actionButtons.map((el) => {
                        return <button className="actionButtons">{el.name}</button>;
                    })}
                </div>
                <div className="col-9 dashboardContent"></div>
            </div>
        </>
    );
}

export default Dashboard;

// <div className="container mt-5">
//     <h3 className="text-center">Dashboard, welcome</h3>
//     <div className="d-flex ">
//         <Button className="btn btn-primary m-5">
//             <Link className="nav-link" to="/add-log">
//                 Add Log
//             </Link>
//         </Button>
//     </div>
// </div>
