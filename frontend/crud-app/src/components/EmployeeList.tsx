import useEmployees from "../hooks/Employees/useEmployees";
import LoadingSkeleton from './LoadingSkeleton';
import EmptyState from './EmptyState';
import './EmployeeList.css';
import { useDepartment } from "../contexts/department/DepartmentHook";
import { useState } from "react";
import { Employee } from "../models/Employee";
import DepartmentModal from "./DepartmentDetailsPopup";
import { Link } from "react-router";

function EmployeeList() {
  const { employees, loading, error } = useEmployees();

  const [showModal, setShowModal] = useState<boolean>(false);
  const { setSelectedDepartment } = useDepartment();

  if (loading) return <LoadingSkeleton />;
  if (error) return <div className="alert alert-danger" role="alert">{error}</div>;
  if (!employees.length) return <EmptyState />;

  const handleDepartmentClick = (department: Employee["department"]) => {
    setSelectedDepartment(department);
    setShowModal(true);
  };

  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">Position</th>
            <th scope="col">Department</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={emp.id}>
              <td scope="row">{index + 1}</td>
              <td>
                <Link to={`editemployee/${emp.id}`}>{emp.fullName}</Link></td>
              <td>{emp.position}</td>
              <td>
                <button
                  className="btn btn-link p-0"
                  onClick={() => handleDepartmentClick(emp.department)}
                >
                  {emp.department.name}
                </button>
              </td>
              <td>
                <Link to={`/editemployee/${emp.id}`} className="btn btn-primary" style={{ marginRight: 10 }}>Edit</Link>
                <Link to={`/deleteemployee/${emp.id}`} className="btn btn-danger">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DepartmentModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default EmployeeList;