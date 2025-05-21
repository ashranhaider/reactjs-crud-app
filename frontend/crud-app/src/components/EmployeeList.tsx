import useEmployees from "../hooks/Employees/useEmployees";
import LoadingSkeleton from './LoadingSkeleton';
import EmptyState from './EmptyState';
import './EmployeeList.css';
import { useDepartment } from "../contexts/department/DepartmentHook";
import { useState } from "react";
import { Employee } from "../models/Employee";
import DepartmentModal from "./DepartmentDetailsPopup";
import { Link } from "react-router";
import DeleteEmployeePopup from "./deleteEmployeePopup";
import { deleteEmployee } from "../services/employeeService";

function EmployeeList() {
  const { employees, loading, error, refetchData } = useEmployees();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [showDeleteDialog, setshowDeleteDialog] = useState<boolean>(false);
  const { setSelectedDepartment } = useDepartment();
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  if (loading) return <LoadingSkeleton />;
  if (error) return <div className="alert alert-danger" role="alert">{error}</div>;
  if (!employees.length) return <EmptyState />;

  const handleDepartmentClick = (department: Employee["department"]) => {
    setSelectedDepartment(department);
    setShowModal(true);
  };
  const handleDeleteEmployee = async (employeeId: number) => {
    if (!selectedEmployee) return;

    try {
      await deleteEmployee(selectedEmployee.id); // call API      
      refetchData(); // refresh the employee list
    } catch (error) {
      console.log("Failed to delete employee:", error);
    } finally {
      setSelectedEmployee(null);
    }
    console.log(`Deleting employee with ID: ${employeeId}`);
    setshowDeleteDialog(false);
  }
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
                {emp.fullName}</td>
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
                {/* <Link to={`/deleteemployee/${emp.id}`} className="btn btn-danger">Delete</Link> */}
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    setSelectedEmployee(emp);
                    setshowDeleteDialog(true);
                  }}
                >
                Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DepartmentModal show={showModal} onClose={() => setShowModal(false)} />
      {selectedEmployee && (
        <DeleteEmployeePopup
          employeeName={selectedEmployee.fullName}
          employeeId={selectedEmployee.id}
          show={showDeleteDialog}
          onConfirm={() => handleDeleteEmployee(selectedEmployee.id)}
          onHide={() => setshowDeleteDialog(false)}
        />
      )}
    </div>
  );
}

export default EmployeeList;