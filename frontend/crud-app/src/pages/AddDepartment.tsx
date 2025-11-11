
import { useNavigate } from "react-router";
import useAddDepartmen from "../hooks/Departments/useAddDepartment";
import DepartmentForm from "../components/DepartmentForm";
import { DepartmentVM } from "../viewModels/departmentVMs";


function AddDepartment() {
    const navigate = useNavigate();
    const { addDepartment, loading } = useAddDepartmen();

    const handleAddEmployee = async (formData: {
        name: string;
    }) => {
        const newDepartment: DepartmentVM = {
            id: 0,
            name: formData.name,
        };
        const success = await addDepartment(newDepartment);
        if (success) {
            navigate("/departments"); // or show toast, etc.
        }
    };
    return (
        <>
            <DepartmentForm onSubmit={handleAddEmployee} formSubmitting={loading} />
        </>
    );
}
export default AddDepartment;