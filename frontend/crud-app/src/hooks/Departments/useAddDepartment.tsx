import { useState } from "react";
import { createDepartment } from "../../services/departmentService";
import { DepartmentVM } from "../../viewModels/departmentVMs";


function useAddDepartment() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const addDepartment = async (newDepartment: DepartmentVM) => {
        try {
            setLoading(true);
            await createDepartment(newDepartment);
            setError("");
            return true;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            setError(
                err?.response?.data?.message ||
                err.message ||
                "Error creating department"
            );
            return false;
        } finally {
            setLoading(false);
        }
    };

    return {
        addDepartment,
        loading,
        error,
    };
}
export default useAddDepartment;