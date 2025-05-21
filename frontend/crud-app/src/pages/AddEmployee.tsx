import AddEmployeeForm from "../components/EmployeeForm";
import useAddEmployee from "../hooks/Employees/useAddEmployee";
import { useNavigate } from "react-router";
import { addEmployeeViewModel } from "../viewModels/AddEmployeeVM";
function AddEmployee() {
    const navigate = useNavigate();
    const { addEmployee, loading } = useAddEmployee();

    const handleAddEmployee = async (formData: {
        name: string;
        position: string;
        departmentId: number;
    }) => {
        const newEmployee: addEmployeeViewModel = {
            fullName: formData.name,
            position: formData.position,
            departmentId: formData.departmentId,
        };
        const success = await addEmployee(newEmployee);
        if (success) {
            navigate("/home"); // or show toast, etc.
        }
    };
    return (
        <>
            <AddEmployeeForm onSubmit={handleAddEmployee} formSubmitting={loading} />
        </>
    );
}
export default AddEmployee;