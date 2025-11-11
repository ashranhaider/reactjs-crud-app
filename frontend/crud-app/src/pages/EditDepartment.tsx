import { useNavigate, useParams } from "react-router";
import DepartmentForm from "../components/DepartmentForm";
import { updateDepartment } from "../services/departmentService";
import { editDepartmentVM } from "../viewModels/departmentVMs";
import useDepartments from "../hooks/Departments/useDepartments";

function EditDepartment() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { departments, loading, error } = useDepartments();

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }
    const handleEditDepartment = async (formData: {
        name: string;
    }) => {
        const updatedDepartment: editDepartmentVM = {
            id: Number(id),
            name: formData.name,
        };
        const success = await updateDepartment(updatedDepartment);
        if (success) {
            navigate("/departments"); // or show toast, etc.
        }
    }
    return (
    <>
            <DepartmentForm onSubmit={handleEditDepartment} department={departments.find(d => d.id === Number(id))} ></DepartmentForm>
    </>
  );
}

export default EditDepartment;