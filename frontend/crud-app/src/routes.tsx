import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddEmployee from './pages/AddEmployee.tsx';
import EditEmployee from './pages/EditEmployee.tsx';
import Departments from './pages/Departments.tsx';
import Employees from './pages/Employees.tsx';
import AddDepartment from './pages/AddDepartment.tsx';
import App from './App.tsx';

import { Route, Routes } from "react-router";
import EditDepartment from './pages/EditDepartment.tsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="add-department" element={<AddDepartment />} />
        <Route path="edit-department/:id" element={<EditDepartment />} />
        <Route path="departments" element={<Departments />} />
        <Route path="employees" element={<Employees />} />
        <Route path="add-employee" element={<AddEmployee />} />
        <Route path="EditEmployee/:id" element={<EditEmployee />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}
export default AppRoutes;