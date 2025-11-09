import { Link } from "react-router";
import EmployeeList from "../components/EmployeeList";
import { DepartmentProvider } from "../contexts/department/DepartmentProvider";

function Employees() {
    return (
        <>
            {/* Section: Header / Summary */}
            <section className="section-header">
                <h1 className="h2 mb-3">Employees</h1>

                <div className="header-row d-flex justify-content-between align-items-center">
                    <p className="lead text-muted mb-0">All employees are shown here.</p>
                    <Link to="/add-employee" className="btn btn-primary">
                        Add Employee
                    </Link>
                </div>
            </section>
            <DepartmentProvider>
                <EmployeeList />
            </DepartmentProvider>
        </>

    );
}
export default Employees;