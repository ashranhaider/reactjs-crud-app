import { Link } from "react-router";

function Departments() {
    return (
        <>
            {/* Section: Header / Summary */}
            <section className="section-header">
                <h1 className="h2 mb-3">Departments</h1>

                <div className="header-row d-flex justify-content-between align-items-center">
                    <p className="lead text-muted mb-0">All departments are shown here.</p>
                    <Link to="/add-employee" className="btn btn-primary">
                        Add Employee
                    </Link>
                </div>
            </section>
        </>

    );
}
export default Departments;