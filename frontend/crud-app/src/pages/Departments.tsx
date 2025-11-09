import { Link } from "react-router";
import DepartmentList from "../components/DepartmentList";


function Departments() {

    return (
        <>
            {/* Section: Header / Summary */}
            <section className="section-header">
                <h1 className="h2 mb-3">Departments</h1>

                <div className="header-row d-flex justify-content-between align-items-center">
                    <p className="lead text-muted mb-0">All departments are shown here.</p>
                    {/* <Link to="/add-department" className="btn btn-primary">
                        Add Department
                    </Link> */}
                </div>
            </section>
            <section className="section-content">
                <DepartmentList />
            </section>
        </>

    );
}
export default Departments;