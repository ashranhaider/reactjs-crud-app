import EmployeeList from "../components/EmployeeList";
import { DepartmentProvider } from "../contexts/department/DepartmentProvider";


function Home() {
  return (
    <div>
      <h1>Home</h1>
      <DepartmentProvider>
        <EmployeeList />
      </DepartmentProvider>
    </div>
  );
}
export default Home;