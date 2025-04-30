import { useState } from "react";
import { createEmployee } from "../../services/employeeService";
import { addEmployeeViewModel } from "../../viewModels/AddEmployeeVM";

function useAddEmployee() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const addEmployee = async (newEmployee: addEmployeeViewModel) => {
        try {
            setLoading(true);
            await createEmployee(newEmployee);
            setError("");
            return true;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            setError(
                err?.response?.data?.message ||
                err.message ||
                "Error loading employees"
            );
            return false;
        } finally {
            setLoading(false);
        }
    };

    return {
        addEmployee,
        loading,
        error,
    };
}
export default useAddEmployee;