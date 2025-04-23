import useEmployees from "../hooks/useEmployees";
import LoadingSkeleton from './LoadingSkeleton';
import EmptyState from './EmptyState';
import './EmployeeList.css';

function EmployeeList() {
  const { employees, loading, error } = useEmployees();

  if (loading) return <LoadingSkeleton />;
  if (error) return <div className="alert alert-danger" role="alert">{error}</div>;
  if (!employees.length) return <EmptyState />;

  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">Position</th>
            <th scope="col">Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={emp.id}>
              <td scope="row">{index + 1}</td>
              <td>{emp.fullName}</td>
              <td>{emp.position}</td>
              <td>{emp.department.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;