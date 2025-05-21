import { useNavigate, useParams } from "react-router";
import EmployeeForm from "../components/EmployeeForm";
import useEmployee from "../hooks/Employees/useEmployee";
import { editEmployeeViewModel } from "../viewModels/editEmployeeViewModel";
import { updateEmployee } from "../services/employeeService";

function EditEmployee() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { employees, loading, error } = useEmployee(Number(id));

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }
    const handleEditEmployee = async (formData: {
        name: string;
        position: string;
        departmentId: number;
    }) => {
        const updatedEmployee: editEmployeeViewModel = {
            id: Number(id),
            fullName: formData.name,
            position: formData.position,
            departmentId: formData.departmentId,
        };
        const success = await updateEmployee(updatedEmployee);
        if (success) {
            navigate("/home"); // or show toast, etc.
        }
    }
    return (
    <>
            <EmployeeForm onSubmit={handleEditEmployee} employee={employees} ></EmployeeForm>
    </>
  );
}

export default EditEmployee;