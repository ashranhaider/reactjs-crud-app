import { useEffect, useState } from "react";
import { Department } from "../../models/Department";
import { getDepartments } from "../../services/departmentService";
function useDepartment() {

    const [departments, setdepartments] = useState<Department[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");


    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                setLoading(true);
                const response = await getDepartments();
                setdepartments(response);
                setError("");
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (err: any) {
                setError(
                    err?.response?.data?.message ||
                    err.message ||
                    "Error loading employees"
                );
            } finally {
                setLoading(false);
            }
        };
        fetchDepartments();
    }, []);

    return {
        departments,
        loading,
        error,
    };
}

export default useDepartment;