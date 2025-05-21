import { Link } from "react-router";
import EmployeeList from "../components/EmployeeList";
import { DepartmentProvider } from "../contexts/department/DepartmentProvider";


function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/addemployee" className="btn btn-primary">Add Employee</Link>
      <DepartmentProvider>
        <EmployeeList />
      </DepartmentProvider>
    </div>
  );
}
export default Home;